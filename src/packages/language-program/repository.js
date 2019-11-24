import { LanguageProgram } from '../../models'
import configs from './config'
import { queryBuilderLanguagePrograms } from './query-builder';
import { ObjectId } from '../../utils/mongoose'

const getLanguagePrograms = async (page) => {
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
  return LanguageProgram.aggregate(queryBuilderLanguagePrograms(options));
};

const getLanguageProgramByID = async (id) => {
  return LanguageProgram.findOne({
    _id: ObjectId(id),
    deletedAt: null
  })
}

const createNewLanguageProgram = async (data) => {
  return LanguageProgram.create(data)
};

const deleteLanguageProgram = async (id) => {
  return LanguageProgram.findOneAndUpdate(
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
  getLanguagePrograms,
  getLanguageProgramByID,
  createNewLanguageProgram,
  deleteLanguageProgram
}
