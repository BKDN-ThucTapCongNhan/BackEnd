// import { verify } from 'jsonwebtoken';
// import config from '../configs';
// // import heart from './exercise.js'
// // import comment from './comment.js'
// import { commonLocale } from '../locales';
//
// export default {
//   initConnection: (io) => {
//     io.use((socket, next) => {
//       try {
//         const token = socket.handshake.query.token;
//         if (token) {
//           verify(token.split(' ')[1], config.secret, (error, decoded) => {
//             if (error) {
//               throw new Error(JSON.stringify({message: commonLocale.tokenVerifyFailed}));
//             }
//             if (typeof decoded === 'string') {
//               decoded = JSON.parse(decodeURIComponent(decoded))
//             }
//             socket.user = decoded;
//             next();
//           })
//         } else {
//           throw new Error(JSON.stringify({message: commonLocale.noToken}));
//         }
//       } catch (e) {
//         return next(e);
//       }
//     });
//   }
// }
//
