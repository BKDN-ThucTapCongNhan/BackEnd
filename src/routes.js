import { Router } from 'express'
import adminRoute from './packages/admin/route'
import languageProgramRoute from './packages/language-program/route'
import levelRoute from './packages/level/route'
import courseRoute from './packages/course/route'
import documentRoute from './packages/document/route'
import authAdmin from './packages/system/authAmin'

export default () => {
  const api = Router();
  api.use('/api/v1/admin', [
    api.use('*', authAdmin),
    api.use('/account-admin', adminRoute),
    api.use('/course', courseRoute),
    api.use('/language-programs', languageProgramRoute),
    api.use('/levels', levelRoute),
    api.use('/documents', documentRoute),
  ]);
  //
  // api.use('/api/v1/manager', [
  //   api.use('*', authenticator),
  //   api.use('/account', accountRoute),
  // ]);
  //
  // api.use('/api/v1/teacher', [
  //   api.use('*', authenticator),
  //   api.use('/account', accountRoute),
  // ]);

  // api.use('/api/v1/', [
  //   // api.use('*', authenticator),
  //   api.use('/account', accountRoute),
  // ]);

  return api
}
