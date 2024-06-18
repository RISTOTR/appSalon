import { createTransport } from "../config/nodemailer.js";

export async function sendEmailNewAppointment({date, time}) {
  const transporter = createTransport(
    process.env.EMAIL_HOST,
    process.env.EMAIL_PORT,
    process.env.EMAIL_USER,
    process.env.EMAIL_PASS
  )

   // Enviaar el email
   const info = await transporter.sendMail({
    from: 'AppSalon<citas@appsalon.com>',
    to: 'admin@correo.com',
    subject: "appsalon - Nueva cita",
    text: "appsalon - Nueva cita",
    html: `
    <p>Hola admin, tienes una nueva cita</p>
    <p>La cita será el día: ${date} a las ${time} horas</p>
    `
  })


  console.log('mensaje enviado', info.messageId)

}

export async function sendEmailUpdateAppointment({date, time}) {
  const transporter = createTransport(
    process.env.EMAIL_HOST,
    process.env.EMAIL_PORT,
    process.env.EMAIL_USER,
    process.env.EMAIL_PASS
  )

   // Enviaar el email
   const info = await transporter.sendMail({
    from: 'AppSalon<citas@appsalon.com>',
    to: 'admin@correo.com',
    subject: "appsalon - Cita Actualizada",
    text: "appsalon - Cita Actualizada",
    html: `
    <p>Hola admin, una cita ha sido actualizada.</p>
    <p>La cita será el día: ${date} a las ${time} horas</p>
    `
  })


  console.log('mensaje enviado', info.messageId)

}

export async function sendEmailCancelAppointment({date, time}) {
  const transporter = createTransport(
    process.env.EMAIL_HOST,
    process.env.EMAIL_PORT,
    process.env.EMAIL_USER,
    process.env.EMAIL_PASS
  )

   // Enviaar el email
   const info = await transporter.sendMail({
    from: 'AppSalon<citas@appsalon.com>',
    to: 'admin@correo.com',
    subject: "appsalon - Cita Cancelada",
    text: "appsalon - Cita Cancelada",
    html: `
    <p>Hola admin, una cita ha sido cancelada.</p>
    <p>La cita fue programada: ${date} a las ${time} horas</p>
    `
  })


  console.log('mensaje enviado', info.messageId)

}