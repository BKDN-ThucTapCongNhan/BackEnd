const queryBuilderGetList = (options) => {
  const { limit, skip, match, sort } = options;
  return [
    {
      $match: match
    },
    {
      $lookup: {
        from: 'documents',
        localField: 'documentID',
        foreignField: '_id',
        as: 'document'
      }
    },
    {
      $unwind: {
        path: '$document',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $project: {
        _id: '$_id',
        pathFile: 1,
        nameFile: 1,
        'document._id': 1,
        'document.name': 1,
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
};

export {
  queryBuilderGetList
}
