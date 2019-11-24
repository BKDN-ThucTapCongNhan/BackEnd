// import path from 'path'
// import nodemailer from 'nodemailer'
// import ejs from 'ejs'
// import config from '../configs/env/development'
//
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: config.mailer.user,
//     pass: config.mailer.pass
//   }
// });
//
// const sendMail = async (emailTo, dataConvert) => {
//   ejs.renderFile(__dirname + '/../views/templates/templateSendMail.ejs', dataConvert, (err, result) => {
//     if (err) {
//       console.log(err)
//     } else {
//       transporter.sendMail({
//         from: config.mailer.user,
//         to: emailTo,
//         subject: 'Test',
//         html: result
//       }, async (err, data) => {
//         if (err) {
//           console.log(err)
//         } else {
//           console.log(data)
//         }
//       })
//     }
//   })
//
// }
//
// module.exports = {
//   sendMail
// }
