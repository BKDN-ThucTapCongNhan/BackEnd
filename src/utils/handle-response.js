import { BAD_REQUEST_CODE, SERVER_ERROR_CODE, SUCCESS_CODE } from '../packages/system/authorizator'
import responseBuilder from './response-builder'

const handleMessageResponse = (error, req, res, status = BAD_REQUEST_CODE, success = false, data = {}) => {
  return !error ? res.status(status).jsonp(responseBuilder.build(
    success,
    data,
    {
      code: status,
      message: 'success'
    }
  )) : res.status(status).jsonp(responseBuilder.build(
    success,
    data,
    {
      code: status,
      message: error.message
    }
  ));
};

const handleResponse = (error, result, req, res) => {
  if (error) {
    if (error.code) {
      handleMessageResponse(error, req, res);
    }
    handleMessageResponse(error, req, res, SERVER_ERROR_CODE);
  }
  handleMessageResponse(null, req, res, SUCCESS_CODE, true, result);
};

module.exports = {
  handleResponse,
};
