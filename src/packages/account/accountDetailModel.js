import { mongoose, Schema, ObjectId } from '../../utils/mongoose'
import statics from './static'
import configs from './config'

const AccountDetailSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: configs.genders,
    default: configs.gender.male
  },
  email: {
    type: String,
    unique: true
  },
  classID: {
    type: ObjectId,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  cmnd: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  note: String,
  deletedAt: {
    type: Date,
    default: null
  }
}, {
  versionKey: false,
  timestamps: true
});

AccountDetailSchema.index({ email: 1 });

AccountDetailSchema.statics = statics;

export default mongoose.model('AccountDetail', AccountDetailSchema)
