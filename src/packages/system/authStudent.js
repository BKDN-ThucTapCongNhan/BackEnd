import express from 'express'
import repoUser from '../../packages/account/repository'
import configsAccount from '../../packages/account/config'
import { verifyToken } from '../../utils/verify-token'

const router = express.Router();
const numericFields = ['page'];
const whiteList = ['api/v1/accounts/login'];


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
  const tokenStudent = req.headers.token_student;
  if (tokenStudent) {
    const role = configsAccount.role.Student;
    req.student = verifyToken(tokenStudent, repoUser, role, req, res)
  }
  next()
});

export default router
