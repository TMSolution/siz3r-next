"use server";

import { cookies } from "next/headers";
import * as nodemailer from "nodemailer";

export async function changeLanguage(lang) {
  return new Promise((resolve) => {
    cookies().delete("lang");
    console.debug("Setting language to " + lang);
    cookies().set({
      name: "lang",
      value: lang,
      httpOnly: false,
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), // 1 year
    });
    resolve();
  });
}
export async function sendEmail(name, email, phone, message) {
  return new Promise(async (resolve) => {
    const transporter = nodemailer.createTransport({
      host: "s14.ehost.pl",
      port: 465,
      secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });
    const info = await transporter.sendMail({
      from: "noreply@siz3r.com", // sender address
      to: "biuro@siz3r.com", // list of receivers
      subject: "Formularz kontaktowy siz3r", // Subject line
      text: `Nazwa: ${name}\nE-Mail: ${email || "brak"}\nTelefon: ${
        phone || "brak"
      }\Wiadomość: ${message}`, // plain text body
      html: `<b>Nazwa</b>: {name}\n
  <b>E-Mail</b>: {email || "brak"}\n
  <b>Telefon</b>: {phone || "brak"}\n
  <b>Wiadomość</b>: {message}`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    resolve();
  });
}
