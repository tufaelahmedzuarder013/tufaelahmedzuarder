import React from "react";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.css";
import StoreProvider from "@/store/StoreProvider";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/animation/CustomCursor";
import { SplashCursor } from "@/components/animation/SplashCursor";
import { Preloader } from "@/components/animation/Preloader";
import { constructMetadata } from "@/lib/seo";

const orleanFont = localFont({
  src: [
    {
      path: "./fonts/orlean-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/orlean-regularitalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/orlean-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/orlean-mediumitalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/orlean-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/orlean-semibolditalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/orlean-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/orlean-bolditalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-orlean",
  display: "swap",
});

const aventaFont = localFont({
  src: [
    {
      path: "./fonts/Aventa-LightPERSONALUSEONLY.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Aventa-LightPERSONALUSEONLY.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Aventa-LightPERSONALUSEONLY.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Aventa-LightItallicPERSONALUSEONLY.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Aventa-LightItallicPERSONALUSEONLY.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-aventa",
  display: "swap",
});

const caskoLuxury = localFont({
  src: "./fonts/CaskoLuxuryDemo-Regular.otf",
  variable: "--font-casko-luxury",
  display: "swap",
});

const nclGasdrifo = localFont({
  src: "./fonts/NCLGasdrifo-Demo.otf",
  variable: "--font-ncl-gasdrifo",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: "#FAFAFD",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${orleanFont.variable} ${aventaFont.variable} ${caskoLuxury.variable} ${nclGasdrifo.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }

                  var hasSeen = sessionStorage.getItem('hasSeenPreloader');
                  if (!hasSeen) {
                    document.documentElement.classList.add('is-preloading');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-bg text-brand-ink antialiased selection:bg-brand-violet selection:text-white">
        <StoreProvider>
          <SplashCursor />
          <CustomCursor />
          <Preloader />
          <div id="website-content" className="flex-1 flex flex-col transition-opacity duration-700">
            <Navbar />
            <MobileNav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
