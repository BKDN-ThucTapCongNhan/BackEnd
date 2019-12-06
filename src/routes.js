import { Router } from 'express'
import adminRoute from './packages/admin/route'
import languageProgramRoute from './packages/language-program/route'
import levelRoute from './packages/level/route'
import courseRoute from './packages/course/route'
import documentRoute from './packages/document/route'
import accountRoute from './packages/account/route'
import classRoute from './packages/class/route'
// import authAdmin from './packages/system/authAmin'
// import authUser from './packages/system/authStudent'

export default () => {
  const api = Router();
  api.use('/api/v1/admin', [
    // api.use('*', authAdmin),
    api.use('/account-admin', adminRoute),
    api.use('/courses', courseRoute),
    api.use('/language-programs', languageProgramRoute),
    api.use('/levels', levelRoute),
    api.use('/documents', documentRoute),
    api.use('/accounts', accountRoute),
    api.use('/classes', classRoute),
  ]);

  api.use('/api/v1/', [
    api.use('/account', accountRoute),
  ]);

  return api
}
