import bcrypt from 'bcrypt'

function authenticate(plainText) {
  return bcrypt.compareSync(plainText, this.hashPassword);
}

function hashPasswordUser(password) {
  if (!password) return '';
  const salt = bcrypt.genSaltSync(2);
  return bcrypt.hashSync(password, salt);
}

export default {
  authenticate,
  hashPasswordUser,
}
