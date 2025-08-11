import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import HTML_TEMPLATE from "./htmlTemplate";

export async function POST(req: NextRequest) {
  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_SMTP, // Gmail's SMTP server
    port: 465, // Port for TLS
    secure: true, // Use TLS
    auth: {
      user: process.env.NEXT_SMTP_USER, // Your Gmail address
      pass: process.env.NEXT_SMTP_PASS, // Your Gmail app password
    },
  });

  try {
    const body = await req.json();
    console.log(body)

    await transporter.sendMail({
      from: `Venttat Event Management Services <${process.env.SMTP_USER}>`,
      to: body.email,
      subject: "Venttat | Order Confirmation",
      html: HTML_TEMPLATE(body),
    });

    console.log("📧 Email sent with PDF attachment!");
    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("📧 Error sending email:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}