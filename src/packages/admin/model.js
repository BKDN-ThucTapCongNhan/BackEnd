import { mongoose, Schema } from '../../utils/mongoose'
import methods from './method'
import statics from './static'
import configs from './config'

const AdminSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  hashPassWord: {
    type: String
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

AdminSchema.statics = statics;
AdminSchema.statics = methods;

AdminSchema.index({ email: 1 });

AdminSchema.virtual('password').set(function (password) {
  this._password = password;
  this.hashPassWord = this.hashPassword(password)
});

AdminSchema.methods = methods;
AdminSchema.statics = statics;

export default mongoose.model('Admin', AdminSchema)
