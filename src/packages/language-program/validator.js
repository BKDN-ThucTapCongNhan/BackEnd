import Joi from 'joi'
import errorMessage from '../../utils/custom-error'

export default {
  validateRegister: {
    body: {
      name: Joi.string().required().label('name').error(errorMessage()),
      brief: Joi.string().label('brief').error(errorMessage()),
    }
  }
}
