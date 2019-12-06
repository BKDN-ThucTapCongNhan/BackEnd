import Joi from 'joi'
import errorMessage from '../../utils/custom-error'
import configs from '../../configs/env'

export default {
  validateRegister: {
    body: {
      name: Joi.string().required().label('name').error(errorMessage()),
      description: Joi.string().required().label('description').error(errorMessage()),
      courseID: Joi.string().required().regex(configs.regex.objectId).label('courseID').error(errorMessage()),
      teacherID: Joi.string().required().regex(configs.regex.objectId).label('teacherID').error(errorMessage()),
      numberMember: Joi.number().required().label('numberMember').error(errorMessage()),
      dateBegin: Joi.string().required().label('dateBegin').error(errorMessage()),
      dateEnd: Joi.string().required().label('dateEnd').error(errorMessage()),
    }
  },
}
