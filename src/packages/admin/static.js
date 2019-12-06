import lodash from 'lodash'

async function commonAccountData(accountDetail) {
  return lodash.pick(accountDetail, [
    '_id',
    'email',
    'role'
  ])
}

export default {
  commonAccountData
}
