import env from '../../utils/env'

export default {
  db: 'mongodb://localhost/demo',
  dbOptions: (options) => {
    return {
      useCreateIndex: true,
      autoIndex: options.autoIndex,
      autoReconnect: true,
      useNewUrlParser: true,
      keepAlive: 1,
      connectTimeoutMS: 300000,
      socketTimeoutMS: 300000
    }
  },
  secret: env.SECRET,
  email: {
    id: 'prod@techchain.vn',
    pass: env.EMAIL_PASS
  }
}
