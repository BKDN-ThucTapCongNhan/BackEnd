import Joi from 'joi'
import errorMessage from '../../utils/custom-error'
import configs from '../../configs/env'
import config from '../../configs'

export default {
  validateRegister: {
    body: {
      name: Joi.string().required().label('name').error(errorMessage()),
      phone: Joi.string().required().regex(configs.regex.phone).label('phone').error(errorMessage()),
      gender: Joi.string().required().label('gender').error(errorMessage()),
      email: Joi.string().required().regex(configs.regex.email).label('email').error(errorMessage()),
      classID: Joi.string().label('classID').regex(configs.regex.objectId).error(errorMessage()),
      birthday: Joi.string().required().label('birthday').error(errorMessage()),
      CMND: Joi.string().required().label('CMND').error(errorMessage()),
      address: Joi.string().required().label('address').error(errorMessage()),
      note: Joi.string().label('note').error(errorMessage()),
      role: Joi.string().required().label('role').error(errorMessage()),
      password: Joi.string().required().regex(configs.regex.password).label('password').error(errorMessage()),
    }
  },
  validateLogin: {
    body: {
      email: Joi.string().required().regex(config.regex.email).label('email').error(errorMessage()),
      password: Joi.string().required().regex(config.regex.password).label('password').error(errorMessage()),
    }
  }
}
