import lodash from 'lodash'

async function commonFileData(accountDetail) {
  return lodash.pick(accountDetail, [
    '_id',
    'documentID',
    'pathFile',
    'nameFile',
    'order'
  ])
}

export default {
  commonFileData
}
