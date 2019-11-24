import connectDb from './db'
import createAdmin from './admin'

export default async () => {
  global.valueAll = 'all';
  await connectDb();
  await createAdmin();
  require('../models')
}
