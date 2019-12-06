import amazon from './cross-env/amazon'

const app = {
  env: {
    production: 'production',
    development: 'development',
    test: 'test'
  },

  conventions: {
    number: 0,
    array: [],
    string: '',
    object: null
  },

  regex: {
    objectId: /^[0-9a-fA-F]{24}$/,
    phone: /^\+?1?(\d{10,12}$)/,
    email: /\S+@\S+\.\S+/,
    password: /^[a-f0-9]{32}$/
  },

  format: {
    date: 'YYYY-MM-DD'
  },

  refreshTokenLifeTime: '30d'
}

export default Object.assign(app, amazon)
