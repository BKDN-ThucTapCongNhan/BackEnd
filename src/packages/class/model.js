import { mongoose, ObjectId, Schema } from '../../utils/mongoose'
import statics from './static'
import configs from './config'

const ClassSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  courseID: {
    type: ObjectId,
    required: true,
  },
  teacherID: {
    type: ObjectId,
    default: null
  },
  numberMember: {
    type: Number,
    required: true,
  },
  dateBegin: {
    type: Date,
    required: true
  },
  dateEnd: {
    type: Date,
    required: true
  },
  status: {
    type: Number,
    enum: configs.listStatus,
    default: configs.status.Active
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, {
  versionKey: false,
  timestamps: true
});

ClassSchema.statics = statics;

export default mongoose.model('Class', ClassSchema)
