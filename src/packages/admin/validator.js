import Joi from 'joi'
import errorMessage from '../../utils/custom-error'
import config from '../../configs'

export default {
  validateUpdate: {
    body: {
      email: Joi.string().regex(config.regex.email).label('email').error(errorMessage()),
      password: Joi.string().regex(config.regex.password).label('password').error(errorMessage()),
    }
  },
  validateLogin: {
    body: {
      email: Joi.string().required().regex(config.regex.email).label('email').error(errorMessage()),
      password: Joi.string().required().regex(config.regex.password).label('password').error(errorMessage()),
    }
  }
}
