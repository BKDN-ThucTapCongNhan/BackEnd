
const queryBuilderCourses = (options) => {
  const { limit, skip, match, sort } = options;
  return [
    {
      $match: match
    },
    {
      $lookup: {
        from: 'languageprograms',
        localField: 'languageProgramID',
        foreignField: '_id',
        as: 'language-program'
      }
    },
    {
      $unwind: {
        path: '$language-program',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $lookup: {
        from: 'levels',
        localField: 'levelID',
        foreignField: '_id',
        as: 'level'
      }
    },
    {
      $unwind: {
        path: '$level',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $lookup: {
        from: 'documents',
        localField: 'lessonID',
        foreignField: '_id',
        as: 'document'
      }
    },
    {
      $unwind: {
        path: 'document',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $project: {
        _id: '$_id',
        name: 1,
        'language-program._id': 1,
        'language-program.name': 1,
        'language-program.brief': 1,
        'level._id': 1,
        'level.name': 1,
        'level.code': 1,
        period: 1,
        fee: 1,
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

const queryBuilderDetailCourse = (options) => {
  return [
    {
      $match: options
    },
    {
      $lookup: {
        from: 'languageprograms',
        localField: 'languageProgramID',
        foreignField: '_id',
        as: 'language-program'
      }
    },
    {
      $unwind: {
        path: '$language-program',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $lookup: {
        from: 'levels',
        localField: 'levelID',
        foreignField: '_id',
        as: 'level'
      }
    },
    {
      $unwind: {
        path: '$level',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $lookup: {
        from: 'documentdetails',
        localField: 'lessonID',
        foreignField: 'documentID',
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
      $group: {
        _id: '$_id',
        name: { $first: '$name' },
        language: { $first: '$language-program' },
        level: { $first: '$level' },
        lesson: { $push: '$document' },
        preiod: { $first: '$period' },
        fee: { $first: '$fee' }
      }
    },
    {
      $project: {
        _id: '$_id',
        name: 1,
        'language._id': 1,
        'language.name': 1,
        'language.brief': 1,
        'level._id': 1,
        'level.name': 1,
        'level.code': 1,
        period: 1,
        fee: 1,
        'lesson._id': 1,
        'lesson.pathFile': 1,
        'lesson.nameFile': 1,
        'lesson.order': 1
      }
    }
  ]
}

export {
  queryBuilderCourses,
  queryBuilderDetailCourse
}
