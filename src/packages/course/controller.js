import lodash from 'lodash'
import service from './service'
import to from '../../utils/to'
import { handleResponse } from '../../utils/handle-response'

async function create(req, res) {
  const ALLOWED_ATTRIBUTE = [
    'name',
    'languageProgramID',
    'levelID',
    'period',
    'fee',
    'lessonID'];
  const newDataCourse = lodash.pick(req.body, ALLOWED_ATTRIBUTE);
  const [error, course] = await to(service.createCourse(newDataCourse));
  handleResponse(error, course, req, res);
}

const index = async (req, res) => {
  const [error, courses] = await to(service.getListCourses(req));
  const data = (courses.length) ? { courses: [...courses] } : {};
  handleResponse(error, data, req, res);
};

const show = async (req, res) => {
  const courseID = req.params.id;
  const [error, course] = await to(service.getDetailCourse(courseID));
  handleResponse(error, course, req, res);
};

async function remove(req, res) {
  const courseID = req.params.id;
  const [error, courseRemove] = await to(service.removeCourse(courseID));
  handleResponse(error, courseRemove, req, res);
}

async function update(req, res) {
  const ALLOWED_ATTRIBUTE = [
    'name',
    'languageProgramID',
    'levelID',
    'period',
    'fee',
    'lessonID'];
  const newData = lodash.pick(req.body, ALLOWED_ATTRIBUTE);
  const courseID = req.params.id;
  const [error, courseUpdate] = await to(service.updateCourse(courseID, newData));
  handleResponse(error, courseUpdate, req, res);
}

export default {
  create,
  index,
  show,
  update,
  remove
}
