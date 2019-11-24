const queryBuilderLevels = (options) => {
  const { limit, skip, match, sort } = options;
  return [
    {
      $match: match
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
  ];
};

export {
  queryBuilderLevels
}
