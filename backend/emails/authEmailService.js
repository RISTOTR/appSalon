import { createTransport } from "../config/nodemailer.js";

export async function sendEmailVerification({name, email,token}) {
  const transporter = createTransport(
    process.env.EMAIL_HOST,
    process.env.EMAIL_PORT,
    process.env.EMAIL_USER,
    process.env.EMAIL_PASS
  )

  // Enviaar el email
  const info = await transporter.sendMail({
    from: 'AppSalon<cuentas@appsalon.com>',
    to: email,
    subject: "appsalon - confirma tu cuenta",
    html: `
    <p>Hola: ${name}, confirma tu cuenta AppSalon</p>
    <p>Tu cuenta casi está lista, solo debes confirmarlo en el siguiente enlace</p>
    <a href=${process.env.FRONTEND_URL}/auth/verify/${token}>Confirmar cuenta</a>
    <p>Si tu no creaste esta cuenta puedes ignorar este mensaje</p>
    `
  })


  console.log('mensaje enviado', info.messageId)
}

export async function sendEmailPasswordReset({name, email,token}) {
  const transporter = createTransport(
    process.env.EMAIL_HOST,
    process.env.EMAIL_PORT,
    process.env.EMAIL_USER,
    process.env.EMAIL_PASS
  )

  // Enviaar el email
  const info = await transporter.sendMail({
    from: 'AppSalon<cuentas@appsalon.com>',
    to: email,
    subject: "appsalon - Reestablece tu password",
    text: "appsalon - Reestablece tu password",
    html: `
    <p>Hola: ${name}, has solicitado reestablecer tu password</p>
    <p>Haz click en el siguiente enlace para generar un nuevo password</p>
    <a href=${process.env.FRONTEND_URL}/auth/olvide-password/${token}>Reestablecer Password</a>
    <p>Si tu no solicitaste esto, puedes ignorar este mensaje</p>
    `
  })


  console.log('mensaje enviado', info.messageId)
}