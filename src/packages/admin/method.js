import bcrypt from 'bcrypt'
import { pick } from 'lodash'

function authenticate(plainText) {
  return bcrypt.compareSync(plainText, this.hashPassWord);
}

function hashPassword(password) {
  if (!password) return '';
  const salt = bcrypt.genSaltSync(2);
  return bcrypt.hashSync(password, salt);
}

function genTokenData() {
  return pick(this, ['_id', 'email'])
}

export default {
  authenticate,
  hashPassword,
  genTokenData
}
