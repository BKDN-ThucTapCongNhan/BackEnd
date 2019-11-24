import lodash from 'lodash'
import service from './service'
import to from '../../utils/to'
import { handleResponse } from '../../utils/handle-response'

async function update(req, res) {
  const ALLOWED_ATTRIBUTE = ['email', 'password'];
  const newData = lodash.pick(req.body, ALLOWED_ATTRIBUTE);
  const oldAdmin = req.admin;
  const [error, updateAdmin] = await to(service.updatePassword(oldAdmin, newData));
  handleResponse(error, updateAdmin, req, res);
}

async function login(req, res) {
  const ALLOWED_ATTRIBUTE = ['email', 'password'];
  const data = lodash.pick(req.body, ALLOWED_ATTRIBUTE);
  const [error, admin] = await to(service.loginByPassword(data));
  handleResponse(error, admin, req, res);
}


async function getProfile(req, res) {
  const adminID = req.admin._id;
  const [error, admin] = await to(service.getMe(adminID));
  handleResponse(error, admin, req, res);
}

export default {
  update,
  login,
  getProfile
}
