import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, service, message } = body

    console.log("Contact Form Submission:", {
      name,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_APP_PASSWORD, // Gmail App Password (not regular password)
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "farid.istar05@gmail.com",
      subject: `Новое сообщение с сайта Green Energy: ${service || "Общий запрос"}`,
      text: `Имя: ${name}\nТелефон: ${phone}\nУслуга: ${service || "Не указана"}\nСообщение: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 10px;">Новое обращение с сайта Green Energy</h2>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #333;">Имя:</strong> <span style="color: #666;">${name}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #333;">Телефон:</strong> <a href="tel:${phone}" style="color: #16a34a; text-decoration: none;">${phone}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #333;">Услуга:</strong> <span style="color: #666;">${service || "Не указана"}</span></p>
          </div>
          <div style="background: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0 0 10px 0;"><strong style="color: #333;">Сообщение:</strong></p>
            <p style="margin: 0; color: #666; line-height: 1.6;">${message || "Не указано"}</p>
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #999; font-size: 12px;">
            <p>Отправлено: ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Dushanbe" })}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}
