import { queryBuilderGetList } from './query-builder';
import config from './config';
import { DocumentDetail } from '../../models'

async function createDocumentFile(model, data) {
  return model.create(data)
}

const findOne = async (model, options) => {
  const query = { ...options };
  query.deletedAt = null;
  return model.findOne(query);
};

const getFiles = async (page, id) => {
  const limit = config.limit.index;
  const skip = page * limit;
  const options = {
    page,
    limit,
    skip,
    sort: { order: -1 },
    match: {
      documentID: id,
      deletedAt: null
    }
  };
  return DocumentDetail.aggregate(queryBuilderGetList(options));
};

const deleteDocument = async (model, options) => {
  const query = { ...options };
  query.deletedAt = null;
  return model.findOneAndUpdate(
    query,
    {
      $set: {
        deletedAt: Date.now()
      }
    },
    { new: true }
  );
};

export default {
  createDocumentFile,
  findOne,
  deleteDocument,
  getFiles
}
