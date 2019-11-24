import bcrypt from 'bcrypt'

export default function hashString(str) {
  const salt = bcrypt.genSaltSync(2);
  return bcrypt.hashSync(str, salt);
}
