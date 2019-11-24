import { commonLocale } from '../../locales/index'
import ResponseBuilder from '../../utils/response-builder'
import cipher from '../../utils/cipher'
import errorUtil from '../../utils/error';

const BAD_REQUEST_CODE = 400
const UN_AUTHORIZED_CODE = 401
const DUPLICATE_CODE = 409
const SERVER_ERROR_CODE = 500

async function checkPasswordFormat(req, res, next) {
  const { password } = req.body;
  if (!password || !cipher.isMd5Hash(password)) {
    return res.status(BAD_REQUEST_CODE).jsonp(ResponseBuilder.build(false, {}, errorUtil.parseError(commonLocale.passwordInvalidFormat)))
  }
  next()
}

export default {
  checkPasswordFormat
}

export {
  BAD_REQUEST_CODE,
  UN_AUTHORIZED_CODE,
  DUPLICATE_CODE,
  SERVER_ERROR_CODE
}
