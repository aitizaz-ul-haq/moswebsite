import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const address = formData.get("address");
    const position = formData.get("position");
    const message = formData.get("message");
    const resumeFile = formData.get("resume"); // File object

    // Shared attachments (logos)
    let attachments = [
      {
        filename: "mos_logo.png",
        path: path.join(process.cwd(), "public", "mos_logo.png"),
        cid: "moslogo",
      },
      {
        filename: "mos_website.png",
        path: path.join(process.cwd(), "public", "mos_website.png"),
        cid: "mosfooterlogo",
      },
    ];

    // Add resume if uploaded
    if (resumeFile && resumeFile.name) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
      });
    }

    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // --- HR EMAIL ---
    const hrMailOptions = {
      from: `"${name}" <${email}>`,
    //   to: "s.ahmed@manageoutsource.com", 
       to: "atz.softprgmr@gmail.com", 
      subject: `Job Application: ${position}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <img src="cid:moslogo" alt="MOS Logo" style="height: 50px;" />
          <h2>New Job Application Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Position Applied For:</strong> ${position}</p>
          <p><strong>Message:</strong><br>${message}</p>
          <br />
          <img src="cid:mosfooterlogo" alt="MOS Footer Logo" style="height: 40px;" />
        </div>
      `,
      attachments,
    };

    // --- THANK YOU EMAIL ---
    const thankYouMailOptions = {
      from: `Manage Outsource Services <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Application Received – ${position}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd;">
          <!-- Header Section -->
          <table width="100%" style="border-collapse: collapse;">
            <tr>
              <td align="left">
                <img src="cid:moslogo" alt="Manage Outsource Services" style="height: 120px;">
              </td>
              <td align="right"></td>
            </tr>
          </table>
          
          <!-- Middle Section -->
         <!-- <h1 style="text-align: center; color: #333; font-size: 24px; font-weight: 300; font-family: inter, serif;">
            Thank You for contacting Manage Outsource Services
          </h1> -->
          <p style="font-size: 16px; color: #555; text-align: left;">Dear ${name},</p>
          <p style="font-size: 16px; color: #555; text-align: left;">
            We have successfully received your application for the <strong>${position}</strong> role.
          </p>
          <p style="font-size: 16px; color: #555; text-align: left;">
            Our HR team will carefully review your application, and if your profile matches our requirements, we will contact you for the next steps.
          </p>
          <p style="font-size: 16px; color: #555; text-align: left; margin-top: 20px; font-weight: 300; font-family: inter, serif;">
            Thank you again for your interest in joining <strong>Manage Outsource Services</strong>.
          </p>
          
          <!-- Footer Section -->
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          <table width="100%" style="border-collapse: collapse;">
            <tr>
              <td align="left" style="font-size: 14px; color: #555; font-weight: 300;">
                <strong>Manage Outsource Services</strong><br>
                Office no 212, Pakland VISTA,<br>
                I-8 Markaz Islamabad.<br>
                <!--  <p>
                  Follow us on:
                  <a href="https://instagram.com/" target="_blank">Instagram</a> |
                  <a href="https://facebook.com" target="_blank">Facebook</a> |
                  <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                </p> -->
              </td>
              <td align="right">
                <img src="cid:mosfooterlogo" alt="MOS Footer Logo" style="height: 50px;" />
              </td>
            </tr>
          </table>
        </div>
      `,
      attachments,
    };

    // Send both emails
    await transporter.sendMail(hrMailOptions);
    await transporter.sendMail(thankYouMailOptions);

    return NextResponse.json({
      success: true,
      message: "Application submitted and emails sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send application." },
      { status: 500 }
    );
  }
}
