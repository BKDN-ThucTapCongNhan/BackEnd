import express from 'express'
import CourseCtrl from './controller'
import paramValidator from '../validator'

const router = express.Router();

/**
 * @api {post} /admin/courses/ Create course
 * @apiHeader {String} [Authorization] Access token, if admin logged in then call with token, else call none token
 * @apiVersion 1.0.0
 * @apiGroup Course
 * @apiName Create course
 *
 * @apiParam {String} name name of course
 * @apiParam {String} languageProgramID language program
 * @apiParam {String} levelID level program
 * @apiParam {String} period number month to complete of course
 * @apiParam {String} fee notation of level
 * @apiParam {String} lessonID document of course
 */
router.post('/', paramValidator.course.validateRegisterCourse, CourseCtrl.create);

/**
 * @api {get} /admin/courses/ Get detail a course
 * @apiHeader {String} [Authorization] Access token, if admin logged in then call with token, else call none token
 * @apiVersion 1.0.0
 * @apiGroup Course
 * @apiName Get detail course
*/
router.get('/:id', CourseCtrl.show);
export default router
