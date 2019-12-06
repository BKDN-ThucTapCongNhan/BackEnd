import configs from './config'
import { queryBuilderAccounts } from './query-builder'
import { Account } from '../../models'

async function createAccount(model, data) {
  return model.create(data);
}

const findOne = async (model, options) => {
  const { email } = options;
  return model.findOne({
    email,
    deletedAt: null,
    status: configs.status.Active
  });
};

const findOneById = async (id, role) => {
  return Account.findOne({
    _id: id,
    role,
    deletedAt: null,
    status: configs.status.Active
  });
};

const getListAccountsByRole = async (page, role) => {
  const limit = configs.limit.index;
  const skip = page * limit;
  const options = {
    page,
    limit,
    skip,
    sort: { createAt: -1 },
    match: {
      role,
      deletedAt: null,
      status: configs.status.Active
    }
  };
  return Account.aggregate(queryBuilderAccounts(options));
};

export default {
  createAccount,
  findOne,
  getListAccountsByRole,
  findOneById
}
