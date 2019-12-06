import express from 'express'
import repoAdmin from '../../packages/admin/repository'
import configsAccount from '../../packages/account/config'
import { verifyToken } from '../../utils/verify-token'
import { UN_AUTHORIZED_CODE } from './authorizator'
import responseBuilder from '../../utils/response-builder'
import errorUtil from '../../utils/error'
import { commonLocale } from '../../locales'

const router = express.Router();
const numericFields = ['page'];
const whiteList = ['/api/v1/admin/account-admin/login'];

router.use((req, res, next) => {
  // Cast all number in query data to number type instead of string
  for (const key in req.query) {
    if (numericFields.indexOf(key) !== -1 && req.query[key] === Number(req.query[key])) {
      req.query[key] = Number(req.query[key])
    }
  }
  if (whiteList.includes(req.baseUrl)) {
    return next()
  }
  const tokenAdmin = req.headers.token_admin;
  if (tokenAdmin) {
    const role = configsAccount.role.Admin;
    req.admin = verifyToken(tokenAdmin, repoAdmin, role, req, res);
    next()
  } else {
    return res.status(UN_AUTHORIZED_CODE).jsonp(responseBuilder.build(false, {}, errorUtil.parseError(commonLocale.noToken)))
  }
});

export default router
