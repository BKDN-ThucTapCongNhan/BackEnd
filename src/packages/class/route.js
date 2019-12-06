import express from 'express'
import paramValidator from '../validator'
import ClassCtrl from './controller'

const router = express.Router()
/**
 * @api {patch} /admin/class/ Register account
 * @apiHeader {String} [Authorization] Access token, if admin logged in then call with token, else call none token
 * @apiVersion 1.0.0
 * @apiGroup Class
 * @apiName Register class
 *
 * @apiParam {String} name
 * @apiParam {String} description
 * @apiParam {String} courseID
 * @apiParam {String} teacherID
 * @apiParam {String} numberMember
 * @apiParam {String} dateBegin
 * @apiParam {String} dateEnd
 */
router.post('/', paramValidator.classCourse.validateRegister, ClassCtrl.create);

export default router
