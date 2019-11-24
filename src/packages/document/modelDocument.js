import { mongoose, Schema } from '../../utils/mongoose'

const DocumentSchema = new Schema({
  name: {
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

export default mongoose.model('Document', DocumentSchema)
