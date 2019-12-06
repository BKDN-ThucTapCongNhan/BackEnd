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

async function register(req, res) {
  const ALLOWED_ATTRIBUTE = [
    'name',
    'email',
    'phone',
    'gender',
    'classID',
    'birthday',
    'CMND',
    'address',
    'note',
    'role',
    'password'];
  const data = lodash.pick(req.body, ALLOWED_ATTRIBUTE);
  const [error, account] = await to(service.createAccount(data));
  handleResponse(error, account, req, res);
}

async function login(req, res) {
  const ALLOWED_ATTRIBUTE = ['email', 'password'];
  const data = lodash.pick(req.body, ALLOWED_ATTRIBUTE);
  const [error, account] = await to(service.loginByPassword(data));
  handleResponse(error, account, req, res);
}

async function show(req, res) {
  const adminID = req.admin._id;
  const [error, admin] = await to(service.getMe(adminID));
  handleResponse(error, admin, req, res);
}

const index = async (req, res) => {
  const [error, listAccount] = await to(service.getListAccounts(req));
  const data = (listAccount.length) ? { listAccount: [...listAccount] } : {};
  handleResponse(error, data, req, res);
};

async function block(req, res) {
  const adminID = req.admin._id;
  const [error, admin] = await to(service.getMe(adminID));
  handleResponse(error, admin, req, res);
}

async function remove(req, res) {
  const adminID = req.admin._id;
  const [error, admin] = await to(service.getMe(adminID));
  handleResponse(error, admin, req, res);
}

export default {
  show,
  register,
  update,
  block,
  remove,
  login,
  index
}
