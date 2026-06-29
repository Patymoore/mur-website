import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Escape user input before interpolating into the HTML email body.
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set")
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 })
  }
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await request.json()
    const { name, email, message, company } = body ?? {}

    // Honeypot: real users never fill this hidden field.
    if (typeof company === "string" && company.trim() !== "") {
      return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
    }

    // Validate presence
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate types and shape
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      name.trim().length < 2 ||
      name.length > 100 ||
      !EMAIL_RE.test(email) ||
      email.length > 200 ||
      message.trim().length < 2 ||
      message.length > 5000
    ) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 })
    }

    const safeName = escapeHtml(name.trim())
    const safeEmail = escapeHtml(email.trim())
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />")

    const { data, error } = await resend.emails.send({
      from: "MUR Solutions <noreply@mur-solutions.com>",
      to: ["patricio@mur-solutions.com"],
      subject: `New contact form message from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B1B30; border-bottom: 2px solid #00C2FF; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0B1B30; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
          </div>

          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #00C2FF; margin: 20px 0;">
            <h3 style="color: #0B1B30; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #333;">${safeMessage}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This email was sent from the MUR Solutions contact form.</p>
            <p>Reply directly to this email to respond to ${safeName}.</p>
          </div>
        </div>
      `,
      replyTo: email,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    console.log("Email sent successfully:", data)
    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
