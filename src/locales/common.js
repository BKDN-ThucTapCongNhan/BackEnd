import { commonCode } from './response-code'

export default {
  tokenVerifyFailed: {
    code: commonCode.tokenVerifyFailed,
    message: 'Authentication failed. Please login again!'
  },
  noToken: {
    message: 'Authentication info not found!'
  },
  apiNotFound: {
    code: commonCode.apiNotFound,
    message: 'API not found!'
  },
  serverError: {
    code: commonCode.serverError,
    message: 'Server error!'
  },
  dataAlreadyExisted: {
    code: commonCode.dataAlreadyExisted,
    message: 'Data is already existed!'
  },
  notFound: {
    code: commonCode.notFound,
    message: 'Data not found!'
  },
  deleteFileFail: {
    code: commonCode.badRequest,
    message: 'Delete file fail!'
  },
  warnClass: {
    code: commonCode.badRequest,
    message: 'Warning field class of student!'
  },
  passwordInvalidFormat: {
    code: commonCode.badRequest,
    message: 'Invalid password MD5!'
  },
  courseNotFound: {
    code: commonCode.badRequest,
    message: 'Course not found!'
  },
  teacherNotFound: {
    code: commonCode.badRequest,
    message: 'Teacher not found!'
  },
  invalidDate: {
    code: commonCode.badRequest,
    message: 'Invalid date!'
  },
  scanClientSocketFail: {
    code: commonCode.badRequest,
    message: 'Scan client socket fail!'
  }
}
