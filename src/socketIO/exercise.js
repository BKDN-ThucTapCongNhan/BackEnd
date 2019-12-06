// import { commonLocale } from '../locales'
//
//
// const eventPostExercise = async (req, res) => {
//   // const io = req.app.io;
//   console.log('A user connection');
//   // const partnerID = await servicePost.findAuthorOfPost(req.body.postID);
//   // if (partnerID.toString() === req.user._id) {
//   //   return res.jsonp(responseBuilder.build(true, {}));
//   // }
//   const clients = req.app.io.sockets.clients().sockets;
//   const clientIDs = Object.keys(clients);
//   if (!clientIDs.length) {
//     throw new Error(JSON.stringify((commonLocale.scanClientSocketFail)))
//   }
//   await Promise.all(clientIDs.map(async (clientID) => {
//     io.to(clientID).emit('post-exercise', req.data);
//   }));
//   // const arrayClientID = Object.keys(clients).filter((key) => {
//   //   return (clients[key].handshake.query.userID == partnerID);
//   // });
//   // const clientID = arrayClientID[0];
//   // if (partnerID === req.user._id) {
//   //   return res.jsonp(responseBuilder.build(true, {}));
//   // };
//   // if (clientID) {
//   //   const userName = await serviceUser.findNameUser(req.user._id);
//   //   io.to(clientID).emit('notification', { name: userName, countHeart: req.hearts.countHeart, postID: req.body.postID });
//   // }
//   return {};
// };
//
// const eventSubMitExercise = async (req, res) => {
//   // const io = req.app.io;
//   // console.log('A user connection');
//   // let teacherID = await servicePost.findAuthorOfPost(req.body.teacherID);
//   // const clients = req.app.io.sockets.clients().sockets;
//   // const arrayClientID = Object.keys(clients).filter((key) => {
//   //   return (clients[key].handshake.query.userID === teacherID);
//   // });
//   // teacherID = arrayClientID[0];
//   // if (teacherID) {
//   //   const userName = await serviceUser.findNameUser(req.user._id);
//   //   io.to(teacherID).emit('notification', req.data);
//   // }
//   return {};
// };
//
// export {
//   eventPostExercise,
//   eventSubMitExercise
// }
//
