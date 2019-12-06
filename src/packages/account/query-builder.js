const queryBuilderAccounts = (options) => {
  const { limit, skip, match, sort } = options;
  return [
    {
      $match: match
    },
    {
      $lookup: {
        from: 'accountdetails',
        localField: 'accountDetailID',
        foreignField: '_id',
        as: 'detail'
      }
    },
    {
      $unwind: {
        path: '$detail',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $project: {
        _id: '$_id',
        role: 1,
        status: 1,
        email: 1,
        'detail.gender': 1,
        'detail.name': 1,
        'detail.phone': 1,
        'detail.birthday': 1,
        'detail.CMND': 1,
        'detail.address': 1,
      }
    },
    {
      $skip: skip
    },
    {
      $sort: sort
    },
    {
      $limit: limit
    }
  ]
}

export default {
  queryBuilderAccounts
}
