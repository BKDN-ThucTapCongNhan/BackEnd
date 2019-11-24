import { Admin } from '../../models'
import configs from './config'

const updateAdmin = async (id, options) => {
  return Admin.findOneAndUpdate(
    {
      _id: id,
      deletedAt: null,
      status: configs.status.Active
    },
    {
      $set: options
    },
    { new: true }
  );
};

const findOne = async (options) => {
  const { email } = options;
  return Admin.findOne({
    email,
    deletedAt: null,
    status: configs.status.Active
  });
}

const findById = async (id) => {
  return Admin.findOne({
    _id: id,
    deletedAt: null,
    status: configs.status.Active
  });
}

const register = async (newData) => {
  const admin = await Admin.create(newData);
  return admin;
};

const updateStatus = async () => {
  return Admin.findOneAndUpdate(
    {
      status: configs.status.Active
    },
    {
      $set: {
        status: configs.status.unActive,
        deletedAt: Date.now()
      }
    }
  )
};

export default {
  updateAdmin,
  register,
  updateStatus,
  findOne,
  findById
}
