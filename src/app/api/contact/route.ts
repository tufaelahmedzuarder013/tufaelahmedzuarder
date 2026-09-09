import { NextResponse } from "next/server";
import { contactSchema } from "@/features/contact/schemas/contact.schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const { name, email, projectType, budget, timeline, message } = parsed.data;

    // Log the inquiry on the server
    console.log("New Project Inquiry Received:", {
      name,
      email,
      projectType,
      budget,
      timeline,
      message,
      receivedAt: new Date().toISOString(),
    });

    // In production, integrate email dispatch (e.g. Resend, Nodemailer, SendGrid, or Slack webhook)

    return NextResponse.json(
      { success: true, message: "Inquiry received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
