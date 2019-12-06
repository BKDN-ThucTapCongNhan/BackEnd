import express from 'express'
import AccountCtrl from './controller'
import paramValidator from '../validator'
import authorizator from '../system/authorizator'

const router = express.Router();
/**
 * @api {patch} /account/register Register account
 * @apiHeader {String} [Authorization] Access token, if admin logged in then call with token, else call none token
 * @apiVersion 1.0.0
 * @apiGroup Account
 * @apiName Register account
 *
 * @apiParam {String} name
 * @apiParam {String} phone
 * @apiParam {String} gender
 * @apiParam {String} email
 * @apiParam {String} classID
 * @apiParam {String} birthday
 * @apiParam {String} CMND
 * @apiParam {String} address
 * @apiParam {String} note
 * @apiParam {String} role
 * @apiParam {String} password
 */
router.post('/register', paramValidator.account.validateRegister, AccountCtrl.register);

/**
 * @api {post} /accounts/login/ Login user
 *
 * @apiVersion 1.0.0
 * @apiGroup Account
 * @apiName Login user
 *
 * @apiParam {String} email email of account admin
 * @apiParam {String} password password of account admin
 */
router.post('/login', authorizator.checkPasswordFormat, paramValidator.account.validateLogin, AccountCtrl.login);

/**
 * @api {post} /accounts/ List account
 *
 * @apiVersion 1.0.0
 * @apiGroup Account
 * @apiName List account
 */
router.get('/:role', AccountCtrl.index);
export default router
