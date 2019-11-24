import { Level } from '../../models'
import configs from './config'
import { queryBuilderLevels } from './query-builder';
import { ObjectId } from '../../utils/mongoose'

const getLevels = async (page) => {
  const limit = configs.limit.index;
  const skip = page * limit;
  const options = {
    page,
    limit,
    skip,
    sort: { createAt: -1 },
    match: {
      deletedAt: null
    }
  };
  return Level.aggregate(queryBuilderLevels(options));
};

const getLevelByID = async (id) => {
  return Level.findOne({
    _id: ObjectId(id),
    deletedAt: null
  })
}

const createNewLevel = async (data) => {
  return Level.create(data)
};

const deleteLevel = async (id) => {
  return Level.findOneAndUpdate(
    {
      _id: id,
      deletedAt: null
    },
    {
      $set: {
        deletedAt: Date.now()
      }
    },
    { new: true }
  );
};

export default {
  getLevels,
  getLevelByID,
  createNewLevel,
  deleteLevel
}
