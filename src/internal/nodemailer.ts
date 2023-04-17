import nodemailer from "nodemailer";
import inlineBase64 from "nodemailer-plugin-inline-base64";
import { SentMessageInfo } from "nodemailer/lib/smtp-connection";

export interface MailOptions {
  from: string;
  to: string[];
  replyTo?: string;
  subject: string;
  text?: string;
  html: string;
}

export interface SMTPOptions {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
}

async function createConnection({
  host,
  port,
  secure,
  user,
  password,
}: SMTPOptions) {
  return new Promise<nodemailer.Transporter>((resolve, reject) => {
    resolve(
      nodemailer.createTransport({
        host: host,
        port,
        secure: secure,
        auth: {
          user: user,
          pass: password,
        },
      })
    );
  });
}

// SEND MAIL
export async function sendMail(
  mailOptions: MailOptions,
  smtp: SMTPOptions
): Promise<SentMessageInfo> {
  const connection = await createConnection(smtp);
  connection.use("compile", inlineBase64({ cidPrefix: "snek_" }));

  console.log(mailOptions);

  const mail = await connection.sendMail(mailOptions);

  console.log(mail);

  return mail;
}