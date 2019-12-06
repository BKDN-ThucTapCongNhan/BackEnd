import lodash from 'lodash'
import service from './service'
import to from '../../utils/to'
import { handleResponse } from '../../utils/handle-response'

async function create(req, res) {
  const ALLOWED_ATTRIBUTE = [
    'name',
    'description',
    'courseID',
    'teacherID',
    'numberMember',
    'dateBegin',
    'dateEnd'];
  const data = lodash.pick(req.body, ALLOWED_ATTRIBUTE);
  const [error, classCourse] = await to(service.createClass(data));
  handleResponse(error, classCourse, req, res);
}

export default {
  create,
}
