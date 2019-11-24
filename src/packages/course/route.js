// import express from 'express'
// import { upload, multipleUploadMiddleware } from '../../services/uploadService'
// import CourseCtrl from './controller'
// import preQuery from '../../utils/pre-query'
// import auth from '../system/authorizator'
// import paramValidator from '../validator'
//
// const router = express.Router()
//
// /**
//  * @api {post} /admin/courses/ Create course
//  * @apiHeader {String} [Authorization] Access token, if admin logged in then call with token, else call none token
//  * @apiVersion 1.0.0
//  * @apiGroup Course
//  * @apiName Create course
//  *
//  * @apiParam {String} name name of level program
//  * @apiParam {String} languageProgramID notation of level
//  * @apiParam {String} levelID notation of level
//  * @apiParam {String} periodID notation of level
//  * @apiParam {String} fee notation of level
//  * @apiParam {String} levelID notation of level
//  * @apiParam {String} levelID notation of level
//  */
// // router.post('/', paramValidator.level.validateRegister, LevelCtrl.create);
// // router.post('/register', async (req, res) => {
// //   await multipleUploadMiddleware(req, res)
// //
// //   console.log(req.files);
// // });
//
//   //paramValidator.course.validateRegister, CourseCtrl.register)
//
// /**
//  * @api {get} /me Show user profile
//  * @apiUse Header
//  * @apiGroup Users
//  *
//  * @apiName Me
//  *
// //  */
// // router.get('/me', auth, auth.requireLogin, UserCtrl.show)
// //
// // router.param('id', auth, preQuery.user)
//
// export default router
