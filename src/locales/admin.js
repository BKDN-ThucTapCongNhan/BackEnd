import { commonCode } from './response-code'

export default {
  incorrectEmail: {
    code: commonCode.badRequest,
    message: 'Email incorrect!'
  },
  incorrectPassword: {
    code: commonCode.badRequest,
    message: 'Password incorrect!'
  },
}
