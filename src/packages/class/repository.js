import { Class } from '../../models'

async function registerClass(body) {
  return Class.create(body)
}

export default {
  registerClass
}
