import lodash from 'lodash'

async function commonCourseData(course) {
  return lodash.pick(course, [
    '_id',
    'name',
    'status',
    'dateBegin',
    'dateEnd',
    'fee',
    'documents'
  ])
}

export default {
  commonCourseData
}
