export const generativeTreeSource = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  * { box-sizing: border-box; }
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: transparent !important;
    pointer-events: none !important;
  }
  canvas {
    display: block;
    width: 100%;
    height: 100%;
    background: transparent !important;
    pointer-events: none !important;
  }
</style>
</head>
<body>
<canvas id="treeCanvas"></canvas>
<script>
(function() {
  const canvas = document.getElementById('treeCanvas');
  const ctx = canvas.getContext('2d');

  let W = 0;
  let H = 0;
  let GROWTH_SPEED_BASE = 0.006;
  const HOLD_DURATION = 400;
  const PARTICLE_COUNT = 50;
  const _pad = parseFloat(new URLSearchParams(location.search).get('p')) || 1;

  let holdTimer = 0;
  let fadeTimer = 0;
  let waitTimer = 0;
  let state = 'GROWING'; // 'GROWING', 'HOLDING', 'FADING', 'WAITING'
  let globalAlpha = 1.0;

  // Vibrant Green Leaves Palette
  const LEAF_COLORS = [
    '#22c55e', // Vibrant Spring Green
    '#10b981', // Rich Emerald Green
    '#34d399', // Bright Glowing Mint
    '#16a34a', // Forest Green
    '#4ade80', // Radiant Lime
    '#86efac', // Soft Jade Highlight
    '#059669'  // Deep Emerald
  ];

  let branches = [];

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = rect.width;
    H = rect.height;
    if (W > 0 && H > 0) {
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  }

  window.addEventListener('resize', resize);

  function createTree() {
    branches = [];
    holdTimer = 0;
    fadeTimer = 0;
    waitTimer = 0;
    state = 'GROWING';
    globalAlpha = 1.0;

    const rootX = W / 2;
    const rootY = H * 0.96;
    // Scaled bigger with natural rounded dome curvature
    const scaleFactor = Math.min(W / 520, H / 520) / _pad;
    const trunkLen = 136 * scaleFactor;
    const trunkThick = 9.5 * scaleFactor;

    function buildBranch(parentIdx, x, y, angle, len, thick, depth) {
      // Natural dome curve limit so canopy forms a lush, organic rounded crown
      const normX = Math.abs(x - rootX) / Math.max(1, W * 0.44);
      const domeCeiling = H * 0.08 + (normX * normX) * (H * 0.22);
      
      // If branch nears the organic dome contour, gently reduce length to round the crown
      if (y - Math.cos(angle) * len < domeCeiling) {
        len = Math.max(7 * scaleFactor, (y - domeCeiling) / Math.max(0.2, Math.cos(angle)));
      }

      const bIdx = branches.length;
      const endX = x + Math.sin(angle) * len;
      const endY = y - Math.cos(angle) * len;

      const leaves = [];
      // Foliage at branch ends
      if (depth >= 4 || len < 15 * scaleFactor) {
        const leafCount = Math.floor(4 + Math.random() * 5);
        for (let i = 0; i < leafCount; i++) {
          const spreadRad = 14 * scaleFactor * (0.5 + Math.random() * 0.6);
          const spreadAng = Math.random() * Math.PI * 2;
          leaves.push({
            relX: Math.cos(spreadAng) * spreadRad,
            relY: Math.sin(spreadAng) * (spreadRad * 0.7),
            angle: angle + (Math.random() - 0.5) * 1.5,
            length: (7 + Math.random() * 4.5) * scaleFactor,
            width: (3.8 + Math.random() * 2.5) * scaleFactor,
            color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
            flutterPhase: Math.random() * Math.PI * 2,
            flutterSpeed: 1.8 + Math.random() * 2.4
          });
        }
      }

      branches.push({
        parentIdx,
        startX: x,
        startY: y,
        endX,
        endY,
        angle,
        length: len,
        thickness: thick,
        depth,
        growthProgress: 0,
        growthSpeed: GROWTH_SPEED_BASE * (1.15 - depth * 0.08) * (0.85 + Math.random() * 0.35),
        swayPhase: Math.random() * Math.PI * 2,
        leaves
      });

      // Recursive fractal branching forming full, rounded canopy
      if (depth < 6 && len >= 8 * scaleFactor) {
        let spreads = [];
        if (depth === 0) {
          spreads = [-0.38, -0.13, 0.13, 0.38];
        } else if (depth === 1) {
          spreads = [-0.32, 0.02, 0.34];
        } else if (depth === 2 || depth === 3) {
          spreads = Math.random() > 0.35 ? [-0.28, 0.28] : [-0.32, 0.02, 0.32];
        } else {
          // Outward lateral fanning at higher depths to give a soft, rounded arch
          const lateralBias = (x - rootX) * 0.0008;
          spreads = [-0.26 + lateralBias, 0.26 + lateralBias];
        }

        const nextLenRatio = depth === 0 ? 0.64 : (0.71 + Math.random() * 0.06);
        const nextThickRatio = depth === 0 ? 0.64 : 0.70;

        for (let i = 0; i < spreads.length; i++) {
          const nextAngle = angle + spreads[i] + (Math.random() - 0.5) * 0.07;
          const nextLen = len * nextLenRatio;
          const nextThick = Math.max(0.8 * scaleFactor, thick * nextThickRatio);
          buildBranch(bIdx, endX, endY, nextAngle, nextLen, nextThick, depth + 1);
        }
      }
    }

    // Build central trunk
    buildBranch(-1, rootX, rootY, 0, trunkLen, trunkThick, 0);
  }

  function frame(time) {
    // Decay shake
    if (W <= 0 || H <= 0) {
      resize();
      requestAnimationFrame(frame);
      return;
    }

    // Always clear completely transparently - NO black background!
    ctx.clearRect(0, 0, W, H);
    ctx.save();
    ctx.globalAlpha = globalAlpha;

    // Gentle natural wind wave
    const wind = Math.sin(time * 0.0016) * 0.035 + Math.sin(time * 0.0034) * 0.015;

    let allGrown = true;
    const branchCurrentEnds = [];

    // Draw all branches
    for (let i = 0; i < branches.length; i++) {
      const b = branches[i];
      let startX = b.startX;
      let startY = b.startY;

      if (b.parentIdx >= 0) {
        startX = branchCurrentEnds[b.parentIdx].x;
        startY = branchCurrentEnds[b.parentIdx].y;
        if (branches[b.parentIdx].growthProgress < 0.65) {
          branchCurrentEnds[i] = { x: startX, y: startY };
          allGrown = false;
          continue;
        }
      }

      b.growthProgress = Math.min(1, b.growthProgress + b.growthSpeed);
      if (b.growthProgress < 1) allGrown = false;

      // Natural branch breeze flex
      const sway = Math.sin(time * 0.0022 + b.swayPhase) * 0.010 * (b.depth + 1) + wind * (b.depth * 0.11);
      const curAngle = b.angle + sway;
      const curLen = b.length * b.growthProgress;
      const endX = startX + Math.sin(curAngle) * curLen;
      const endY = startY - Math.cos(curAngle) * curLen;
      branchCurrentEnds[i] = { x: endX, y: endY };

      // Warm amber-wood tone
      const bHue = b.depth <= 1 ? '#8d5530' : (b.depth <= 3 ? '#a56c3e' : '#b87e4c');
      ctx.strokeStyle = bHue;
      ctx.lineWidth = Math.max(0.8, b.thickness);
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      // Draw lush green leaves on outer tips
      if (b.growthProgress > 0.52 && b.leaves.length > 0) {
        const leafProgress = (b.growthProgress - 0.52) / 0.48;
        for (let l = 0; l < b.leaves.length; l++) {
          const leaf = b.leaves[l];
          const lx = endX + leaf.relX * leafProgress;
          const ly = endY + leaf.relY * leafProgress;

          // Gentle natural leaf flutter in breeze
          const flutter = Math.sin(time * 0.0038 * leaf.flutterSpeed + leaf.flutterPhase) * 0.28 + wind * 0.5;
          const lAngle = leaf.angle + flutter;

          ctx.save();
          ctx.translate(lx, ly);
          ctx.rotate(lAngle);
          ctx.fillStyle = leaf.color;

          const lLen = leaf.length * leafProgress;
          const lWid = leaf.width * leafProgress;

          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-lWid, -lLen * 0.4, -lWid * 0.5, -lLen * 0.8, 0, -lLen);
          ctx.bezierCurveTo(lWid * 0.5, -lLen * 0.8, lWid, -lLen * 0.4, 0, 0);
          ctx.closePath();
          ctx.fill();

          // Delicate vein stroke
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.lineWidth = 0.55;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(0, -lLen * 0.75);
          ctx.stroke();

          ctx.restore();
        }
      }
    }

    ctx.restore();

    // Lifecycle
    if (state === 'GROWING') {
      if (allGrown) {
        state = 'HOLDING';
      }
    } else if (state === 'HOLDING') {
      holdTimer++;
      if (holdTimer >= HOLD_DURATION) {
        state = 'FADING';
      }
    } else if (state === 'FADING') {
      fadeTimer++;
      globalAlpha = Math.max(0, 1 - (fadeTimer / 60));
      if (globalAlpha <= 0) {
        state = 'WAITING';
      }
    } else if (state === 'WAITING') {
      waitTimer++;
      if (waitTimer >= 30) {
        createTree();
      }
    }

    requestAnimationFrame(frame);
  }

  resize();
  createTree();
  requestAnimationFrame(frame);
})();
</script>
</body>
</html>`;
