import moment from 'moment';
import { Account, AccountDetail, Admin } from '../../models'
import repo from './repository'
import { commonLocale } from '../../locales'
import configs from '../admin/config'
import tokenGenerator from '../../utils/token-generator'

async function createAccount(data) {
  const {
    name,
    email,
    phone,
    gender,
    classID,
    dateBorn,
    CMND,
    address,
    note,
    role,
    password
  } = data;

  const birthday = moment(dateBorn).toISOString();
  if (role === 2 && classID === null) {
    throw new Error(JSON.stringify((commonLocale.warnClass)))
  }
  const dataDetailAccount = {
    name,
    email,
    phone,
    gender,
    classID,
    birthday,
    CMND,
    address,
    note
  }
  const detailAccount = await repo.createAccount(AccountDetail, dataDetailAccount);
  const dataAccount = {
    email,
    accountDetailID: detailAccount._id,
    role,
    password
  }
  const account = await repo.createAccount(Account, dataAccount);
  return account;
}

const loginByPassword = async (data) => {
  const { email, password } = data;
  let account = await repo.findOne(Account, {
    email,
    status: configs.status.Active,
    deletedAt: null
  });

  if (!account) {
    throw new Error(JSON.stringify((commonLocale.incorrectEmail)))
  } else if (!account.authenticate(password)) {
    throw new Error(JSON.stringify((commonLocale.incorrectPassword)))
  }

  const tokenData = account.genTokenData();
  account = await Admin.commonAccountData(account.toJSON());
  account.token = tokenGenerator.generate(tokenData);
  return account
};

const getListAccounts = async (req) => {
  const { params } = req;
  const roleAccount = params.role;
  const page = req.query.page || 0;
  const accounts = await repo.getListAccountsByRole(page, roleAccount);
  return accounts;
};

export default {
  createAccount,
  loginByPassword,
  getListAccounts
}
