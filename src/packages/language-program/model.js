import { mongoose, Schema } from '../../utils/mongoose'

const LanguageProgramSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  brief: {
    type: String
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, {
  versionKey: false,
  timestamps: true
});


export default mongoose.model('LanguageProgram', LanguageProgramSchema)
