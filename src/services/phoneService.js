// import { Twilio } from 'twilio'
//
// const accountSid = process.env.TWILIO_ACCOUNT_SID
// const authToken = process.env.TWILIO_AUTH_TOKEN
// const fromPhone = process.env.TWILIO_NUMBER
// const client = new Twilio(accountSid, authToken)
//
// const sendSMS = async (phoneNumber, code) => {
//   try {
//     const result = await client.messages.create({
//       body: `${code} This is code verify your account , it will expire after 15 minutes`,
//       from: fromPhone,
//       to: phoneNumber
//     })
//   } catch (err) {
//       return
//   }
// }
// const checkPhoneFormat = async (numberPhone) => {
//   const result = await client.lookups.phoneNumbers(numberPhone)
//     .fetch({type: ['carrier']})
//     .then(success => { return success.phoneNumber })
//     .catch(err => { return undefined })
//
//   return result
// }
//
// module.exports = {
//   sendSMS,
//   checkPhoneFormat
// }
