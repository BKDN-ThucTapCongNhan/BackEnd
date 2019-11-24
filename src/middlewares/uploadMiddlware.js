import { multipleUploadService } from '../services/uploadService'

const uploadMiddleware = async (req, res, next) => {
  await multipleUploadService(req, res);
  next()
}

module.exports = {
  uploadMiddleware
}
