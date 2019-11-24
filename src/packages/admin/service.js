import repo from './repository'
import configs from './config'
import { hashString } from '../../utils/hashString'
import { commonLocale } from '../../locales'
import { Admin } from '../../models'
import tokenGenerator from '../../utils/token-generator'

const create = async (data) => {
  const { email, password } = data;
  const newData = {
    email,
    password,
  };
  const admin = await repo.register(newData);
  return admin;
};

const loginByPassword = async (data) => {
  const { email, password } = data;
  let admin = await repo.findOne({
    email,
    status: configs.status.Active,
    deletedAt: null
  });
  if (!admin) {
    throw new Error(JSON.stringify((commonLocale.incorrectEmail)))
  } else if (!admin.authenticate(password)) {
    throw new Error(JSON.stringify((commonLocale.incorrectPassword)))
  }
  const tokenData = admin.genTokenData();
  admin = await Admin.commonAdminData(admin.toJSON());
  admin.token = tokenGenerator.generate(tokenData);
  return admin
}

const updateProfile = async (oldData, newData) => {
  const email = newData.email || oldData.email;
  const AdminID = oldData._id;
  const hashPassWord = hashString(newData.password) || oldData.hashPassWord;
  const options = {
    email,
    hashPassWord
  };
  const admin = await repo.updatePassword(AdminID, options);
  return admin;
};

const blockAdmin = async () => {
  const admin = await repo.updateStatus();
  return admin;
};

export default {
  updateProfile,
  create,
  blockAdmin,
  loginByPassword
}
