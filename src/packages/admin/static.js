import lodash from 'lodash'

async function commonAdminData(accountDetail) {
  return lodash.pick(accountDetail, [
    '_id',
    'email'
  ])
}

export default {
  commonAdminData
}
