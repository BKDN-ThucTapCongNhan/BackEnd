import { Course } from '../../models'
import configs from './config'
import { queryBuilderCourses, queryBuilderDetailCourse } from './query-builder';
import { ObjectId } from '../../utils/mongoose'

const getCourses = async (page) => {
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
  return Course.aggregate(queryBuilderCourses(options));
};

const getCourseByID = async (id) => {
  const options = {
    _id: ObjectId(id),
    deletedAt: null
  };
  return Course.aggregate(queryBuilderDetailCourse(options));
};

const createNewCourse = async (data) => {
  return Course.create(data)
};

const deleteCourse = async (id) => {
  return Course.findOneAndUpdate(
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

const updateCourseByID = async (id) => {
  return Course.findOneAndUpdate(
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

const findOneByID = async (id) => {
  return Course.findOne({
    _id: id,
    deletedAt: null,
    status: configs.status.Active
  });
}

export default {
  getCourses,
  getCourseByID,
  createNewCourse,
  deleteCourse,
  updateCourseByID,
  findOneByID
}
