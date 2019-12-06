import validate from 'express-validation'
import level from './level/validator'
import languageProgram from './language-program/validator'
import admin from './admin/validator'
import course from './course/validator'
import account from './account/validator'
import classCourse from './class/validator'

function parse(object) {
  const data = {};
  for (const key of Object.keys(object)) {
    data[key] = validate(object[key])
  }
  return data
}

export default {
  level: parse(level),
  languageProgram: parse(languageProgram),
  admin: parse(admin),
  course: parse(course),
  account: parse(account),
  classCourse: parse(classCourse),
}
