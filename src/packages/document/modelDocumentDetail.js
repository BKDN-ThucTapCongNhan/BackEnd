import { mongoose, ObjectId, Schema } from '../../utils/mongoose'
import statics from './static'

const DocumentDetailSchema = new Schema({
  documentID: {
    type: ObjectId,
    required: true
  },
  pathFile: {
    type: String,
    required: true
  },
  nameFile: {
    type: String,
    required: true
  },
  order: {
    type: Number,
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

DocumentDetailSchema.statics = statics;

export default mongoose.model('DocumentDetail', DocumentDetailSchema)
