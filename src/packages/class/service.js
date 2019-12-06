import moment from 'moment'
import repo from './repository'
import repoCourse from '../course/repository'
import repoAccount from '../account/repository'
import configAccounts from '../account/config'
import { commonLocale } from '../../locales'
import { ObjectId } from '../../utils/mongoose'

async function createClass(data) {
  const {
    name,
    description,
    numberMember
  } = data;
  const courseID = ObjectId(data.courseID);
  const course = await repoCourse.findOneByID(courseID);
  if (!course) {
    throw new Error(JSON.stringify((commonLocale.courseNotFound)))
  }
  const teacherID = ObjectId(data.teacherID);
  const teacher = await repoAccount.findOneById(teacherID, configAccounts.role.Teacher);
  if (!teacher) {
    throw new Error(JSON.stringify((commonLocale.teacherNotFound)))
  }
  const dateBegin = moment(data.dateBegin).toISOString();
  const dateEnd = moment(data.dateEnd).toISOString();
  if (dateBegin >= dateEnd) {
    throw new Error(JSON.stringify((commonLocale.invalidDate)))
  }
  const dataClass = {
    name,
    description,
    courseID,
    teacherID,
    numberMember,
    dateBegin,
    dateEnd
  };
  const classCourse = await repo.registerClass(dataClass);
  return classCourse;
}

export default {
  createClass
}
