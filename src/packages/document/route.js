import express from 'express'
import { uploadMiddleware } from '../../middlewares/uploadMiddlware'
import DocumentDetailCtrl from './controller'

const router = express.Router()

/**
 * @api {post} /admin/documents/ Upload document
 * @apiHeader {String} [Authorization] Access token, if admin logged in then call with token, else call none token
 * @apiVersion 1.0.0
 * @apiGroup Document
 * @apiName Upload document
 *
 * @apiParam {String} array-files file upload
 */
router.post('/upload', uploadMiddleware, DocumentDetailCtrl.createDocument);

/**
 * @api {patch} /admin/documents/:id Remove document
 * @apiHeader {String} [Authorization] Access token, if admin logged in then call with token, else call none token
 * @apiVersion 1.0.0
 * @apiGroup Document
 * @apiName Remove document
 */
router.patch('/:id', DocumentDetailCtrl.removeDocument);

/**
 * @api {patch} /admin/documents/:id Get document
 * @apiHeader {String} [Authorization] Access token, if admin logged in then call with token, else call none token
 * @apiVersion 1.0.0
 * @apiGroup Document
 * @apiName Get document
 */
router.get('/:id', DocumentDetailCtrl.getDocument);

export default router
