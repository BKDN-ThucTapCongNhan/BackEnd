// import express from 'express'
// import AccountCtrl from './controller'
// import preQuery from '../../utils/pre-query'
// import auth from '../system/authorizator'
// import paramValidator from '../validator'
// import configs from "./config";
// import {ObjectId} from "../../utils/mongoose";
// import { Account, AccountDetail } from "../../models";
//
// const router = express.Router();
// /**
//  * @api {post} /register Register
//  * @apiGroup Accounts
//  *
//  * @apiName Register
//  *
//  * @apiParam {String} name
//  * @apiParam {String} phone
//  * @apiParam {String} gender
//  * @apiParam {String} email
//  * @apiParam {String} courseID
//  * @apiParam {String} birthday
//  * @apiParam {String} cmnd
//  * @apiParam {String} address
//  * @apiParam {String} note
//  */
// router.post('/register', async () => {
//   const hashPassWord = hashPassword('123123');
//   const newStudent = {
//     name: 'Nguyen Thai Quyen',
//     phone: '0796797382',
//     gender: 'male',
//     email: 'thai.quyen0122gmail.com',
//     classID: '5db8521de0b7be1cfdef0e43',
//     birthday: Date.now(),
//     cmnd: '206148127',
//     address: 'Quang Nam',
//   }
//   const result = await AccountDetail.create(newStudent);
//   const newAccount = {
//     email: result.email,
//     accountDetailID: result._id,
//     role: 3,
//     hashPassWord,
//   }
//   await Account.create(newAccount);
// });
// // paramValidator.account.validateRegister, AccountCtrl.register)
//
// /**
//  * @api {get} /me Show user profile
//  * @apiUse Header
//  * @apiGroup Users
//  *
//  * @apiName Me
//  *
//  */
// //router.get('/me', auth, auth.requireLogin, UserCtrl.show)
//
// //router.param('id', auth, preQuery.user)
//
// export default router
