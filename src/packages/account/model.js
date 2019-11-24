import { mongoose, Schema, ObjectId } from '../../utils/mongoose'
import statics from './static'
import methods from './method'
import configs from './config'

const AccountSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  accountDetailID: {
    type: ObjectId,
    required: true
  },
  role: {
    type: Number,
    enum: configs.roles,
    default: configs.role.Student
  },
  hashPassWord: String,
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

AccountSchema.index({ email: 1 });

AccountSchema.virtual('password').set(function (password) {
  this._password = password;
  this.hashPassWord = this.hashPasswordUser(password)
});

AccountSchema.statics = statics;

AccountSchema.methods = methods;

export default mongoose.model('Account', AccountSchema)
