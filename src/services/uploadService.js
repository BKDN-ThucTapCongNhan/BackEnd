import fs from 'fs'
import multer from 'multer'
import path from 'path'
import util from 'util'
import uuid from 'uuid-v4'
import configs from '../configs/env'

let dirFileUpload = path.resolve(`${path.dirname(require.main.filename)}/uploads`);

const checkFileExits = (pathFile) => {
  return fs.existsSync(pathFile);
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folder = req.body.documentName;
    let dirFolder = `${dirFileUpload}/${folder}`;
    if (!checkFileExits(dirFileUpload)) {
      dirFileUpload = createFolder(path.resolve(`${path.dirname(require.main.filename)}`), 'uploads');
    }

    if (!checkFileExits(`${dirFileUpload}/${folder}`)) {
      dirFolder = createFolder(dirFileUpload, folder);
    }
    callback(null, dirFolder);
  },
  filename: (req, file, callback) => {
    callback(null, getFileName(file.originalname));
  }
});

const uploadManyFiles = multer({ storage }).array('array-files', 30);

const multipleUploadService = util.promisify(uploadManyFiles);

function getFileName(nameFile) {
  return `${path.parse(nameFile).name}_${uuid()}${path.extname(nameFile)}`
}

function createFolder(dirFile, nameFolder) {
  let pathFolder = '';
  try {
    fs.accessSync(`${dirFile}/${nameFolder}`, fs.constants.R_OK | fs.constants.W_OK);
    pathFolder = `${dirFile}/${nameFolder}`
  } catch (err) {
    if (err.code === 'ENOENT') {
      try {
        fs.mkdirSync(`${dirFile}/${nameFolder}`, configs.mask);
        pathFolder = `${dirFile}/${nameFolder}`
      } catch (e) {
        return pathFolder
      }
    }
  }
  return pathFolder
}

module.exports = {
  multipleUploadService,
};
