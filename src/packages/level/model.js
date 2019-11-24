import { mongoose, Schema } from '../../utils/mongoose'

const LevelSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
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

export default mongoose.model('Level', LevelSchema)
