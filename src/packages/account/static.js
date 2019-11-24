import lodash from 'lodash'

async function commonAccountDetailData(accountDetail) {
  return lodash.pick(accountDetail, [
    '_id',
    'name',
    'roleID',
    'phone',
    'gender',
    'email',
    'courseID',
    'birthday',
    'cmnd',
    'address',
    'note',
  ])
}

async function commonAccountData(account) {
  return lodash.pick(account, [
    '_id',
    'email',
    'accountDetailID',
    'hashPassword',
    'status',
    'email',
  ])
}


export default {
  commonAccountDetailData,
  commonAccountData
}
