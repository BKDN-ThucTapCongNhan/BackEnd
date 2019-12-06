import Joi from 'joi'
import errorMessage from '../../utils/custom-error'

export default {
  validateRegisterCourse: {
    body: {
      name: Joi.string().required().label('name').error(errorMessage()),
      languageProgramID: Joi.string().required().label('languageProgramID').error(errorMessage()),
      levelID: Joi.string().required().label('levelID').error(errorMessage()),
      period: Joi.number().required().label('period').error(errorMessage()),
      fee: Joi.number().required().label('fee').error(errorMessage()),
      lessonID: Joi.string().required().label('lessonID').error(errorMessage()),
    }
  }
}
