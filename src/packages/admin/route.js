import express from 'express'
import AdminCtrl from './controller'
import paramValidator from '../validator'
import authorizator from '../system/authorizator'

const router = express.Router();

/**
 * @api {post} /account-admin/login/ Login admin
 *
 * @apiVersion 1.0.0
 * @apiGroup Admin
 * @apiName Login admin
 *
 * @apiParam {String} email email of account admin
 * @apiParam {String} password password of account admin
 */
router.post('/login', authorizator.checkPasswordFormat, paramValidator.admin.validateLogin, AdminCtrl.login);

/**
 * @api {get} /account-admin/profile Get profile
 * @apiHeader {String} Authorization Access token
 * @apiVersion 1.0.0
 * @apiGroup Admin
 * @apiName Get profile
 */
router.get('/profile', AdminCtrl.getProfile);

/**
 * @api {patch} /account-admin/profile/:id Update profile admin
 * @apiHeader {String} [Authorization] Access token, if admin logged in then call with token, else call none token
 * @apiVersion 1.0.0
 * @apiGroup Admin
 * @apiName Update profile admin
 *
 * @apiParam {String} email new email
 * @apiParam {String} password new password
 */
router.patch('/:id', authorizator.checkPasswordFormat, paramValidator.admin.validateUpdate, AdminCtrl.update);

export default router
