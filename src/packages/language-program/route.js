import express from 'express'
import LanguageProgramCtrl from './controller'
import paramValidator from '../validator'

const router = express.Router();

/**
 * @api {post} /admin/language-programs/ Create language program
 * @apiHeader {String} [Authorization] Access token, if admin logged in then call with token, else call none token
 * @apiVersion 1.0.0
 * @apiGroup Language Program
 * @apiName Create language program
 *
 * @apiParam {String} name name of language program
 * @apiParam {String} brief brief content language program
 */
router.post('/', paramValidator.languageProgram.validateRegister, LanguageProgramCtrl.create);

/**
 * @api {get} /admin/language-programs/ Get list language program
 * @apiHeader {String} [Authorization] Access token, if admin logged in then call with token, else call none token
 * @apiVersion 1.0.0
 * @apiGroup Language Program
 * @apiName Get list language program
 */
router.get('/', LanguageProgramCtrl.index);

/**
 * @api {get} /admin/language-programs/:id Get detail a language program
 * @apiHeader {String} [Authorization] Access token, if admin logged in then call with token, else call none token
 * @apiVersion 1.0.0
 * @apiGroup Language Program
 * @apiName Get detail a language program
 */
router.get('/:id', LanguageProgramCtrl.show);

/**
 * @api {patch} /admin/language-programs/:id Remove a language program
 * @apiHeader {String} [Authorization] Access token, if admin logged in then call with token, else call none token
 * @apiVersion 1.0.0
 * @apiGroup Language Program
 * @apiName Remove a language program
 */
router.patch('/:id', LanguageProgramCtrl.remove);

export default router
