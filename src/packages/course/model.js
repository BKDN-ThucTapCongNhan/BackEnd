import { mongoose, ObjectId, Schema } from '../../utils/mongoose'
import statics from './static'
import configs from './config'

const CourseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  languageProgramID: {
    type: ObjectId,
    required: true
  },
  levelID: {
    type: ObjectId,
    required: true
  },
  periodID: {
    type: ObjectId,
    required: true
  },
  status: {
    type: Number,
    enum: configs.listStatus,
    default: configs.status.Active
  },
  fee: {
    type: Number,
    required: true
  },
  lessons: {
    type: String,
    required: true
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, {
  versionKey: false,
  timestamps: true
});

CourseSchema.statics = statics;

export default mongoose.model('Course', CourseSchema)
