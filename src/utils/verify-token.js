import { verify } from 'jsonwebtoken'
import config from '../configs'
import { UN_AUTHORIZED_CODE } from '../packages/system/authorizator'
import responseBuilder from './response-builder'
import errorUtil from './error'
import { commonLocale } from '../locales'

const verifyToken = async (token, repository, req, res) => {
  verify(token.split(' ')[1], config.secret, async (error, decoded) => {
    if (error) {
      return res.status(UN_AUTHORIZED_CODE).jsonp(responseBuilder.build(false, {}, errorUtil.parseError(commonLocale.tokenVerifyFailed)))
    }
    if (typeof decoded === 'string') {
      decoded = JSON.parse(decodeURIComponent(decoded))
    }
    if (typeof decoded._id === 'undefined') {
      return res.status(UN_AUTHORIZED_CODE).jsonp(responseBuilder.build(false, {}, errorUtil.parseError(commonLocale.noToken)))
    }
    const result = await repository.findById({
      _id: decoded._id
    });
    if (!result) {
      return res.status(UN_AUTHORIZED_CODE).jsonp(responseBuilder.build(false, {}, errorUtil.parseError(commonLocale.noToken)))
    }
    return result;
  })
};

module.exports = {
  verifyToken
}
