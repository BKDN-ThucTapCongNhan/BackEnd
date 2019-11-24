import express from 'express'
import LevelCtrl from './controller'
import paramValidator from '../validator'

const router = express.Router();

/**
 * @api {post} /admin/levels/ Create level
 * @apiHeader {String} [Authorization] Access token, if admin logged in then call with token, else call none token
 * @apiVersion 1.0.0
 * @apiGroup Level
 * @apiName Create level
 *
 * @apiParam {String} name name of level program
 * @apiParam {String} code notation of level
 */
router.post('/', paramValidator.level.validateRegister, LevelCtrl.create);

/**
 * @api {get} /admin/levels/ Get list levels
 * @apiHeader {String} [Authorization] Access token, if admin logged in then call with token, else call none token
 * @apiVersion 1.0.0
 * @apiGroup Level
 * @apiName Get list levels
 */
router.get('/', LevelCtrl.index);

/**
 * @api {get} /admin/levels/:id Get detail a level
 * @apiHeader {String} [Authorization] Access token, if admin logged in then call with token, else call none token
 * @apiVersion 1.0.0
 * @apiGroup Level
 * @apiName Get detail a level
 */
router.get('/:id', LevelCtrl.show);

/**
 * @api {patch} /admin/levels/:id Remove a level
 * @apiHeader {String} [Authorization] Access token, if admin logged in then call with token, else call none token
 * @apiVersion 1.0.0
 * @apiGroup Level
 * @apiName Remove a level
 */
router.patch('/:id', LevelCtrl.remove);

export default router
