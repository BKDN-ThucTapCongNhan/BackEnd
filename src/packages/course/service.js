import repo from './repository'
import { commonLocale } from '../../locales'

const getListCourses = async (req) => {
  const page = req.query.page || 0;
  const courses = await repo.getCourses(page);
  return courses;
};

const getDetailCourse = async (id) => {
  const course = await repo.getCourseByID(id);
  if (!course.length) {
    throw new Error(JSON.stringify((commonLocale.notFound)))
  }
  await Promise.all(course[0].lesson.map(async (element) => {
    const nameLesson = element.nameFile.split('_').join(' ');
    element.nameLesson = nameLesson;
  }));
  return course[0];
};

const createCourse = async (data) => {
  const course = await repo.createNewCourse(data);
  return course;
};

const removeCourse = async (id) => {
  const course = await repo.deleteCourse(id);
  if (!course) {
    throw new Error(JSON.stringify((commonLocale.notFound)))
  }
  return course;
};

const updateCourse = async (id, newData) => {
  const oldCourse = await repo.findOneByID(id);
  const options = {
    name: newData.name || oldCourse.name,
    languageProgramID: newData.languageProgramID || oldCourse.languageProgramID,
    levelID: newData.levelID || oldCourse.levelID,
    period: newData.period || oldCourse.period,
    fee: newData.fee || oldCourse.fee,
    lessonID: newData.lessonID || oldCourse.lessonID
  };
  const course = await repo.updateCourseByID(id, options);
  return course
};


export default {
  getListCourses,
  getDetailCourse,
  createCourse,
  removeCourse,
  updateCourse
}
