import path from 'path'
import rimraf from 'rimraf'
import { DocumentDetail, Document } from '../../models'
import repo from './repository'
import { commonLocale } from '../../locales'
import { ObjectId } from '../../utils/mongoose'

async function createDocumentDetail(req) {
  const nameFolder = req.body.documentName;
  const dataDocument = {
    name: nameFolder
  };
  const folderDocument = await repo.createDocumentFile(Document, dataDocument);
  const folderDocumentID = folderDocument._id;
  const files = [];
  await Promise.all(req.files.map(async (element) => {
    const order = Number(element.originalname.split('_')[0]);
    const dataFile = {
      documentID: folderDocumentID,
      pathFile: `uploads/${folderDocument.name}/${element.filename}`,
      nameFile: element.originalname,
      order
    };
    let file = await repo.createDocumentFile(DocumentDetail, dataFile);
    file = await DocumentDetail.commonFileData(file.toJSON());
    files.push(file)
  }));
  return {
    folder: folderDocument.name,
    files
  }
}

async function deleteDocumentDetail(id) {
  const documentID = ObjectId(id);
  const options = { _id: documentID };
  const folder = await repo.findOne(Document, options);
  const dirFileRemove = path.resolve(`${path.dirname(require.main.filename)}/uploads/${folder.name}`);
  rimraf(dirFileRemove, (err) => {
    if (err) throw new Error(JSON.stringify((commonLocale.deleteFileFail)))
  });
  await repo.deleteDocument(Document, options);
  await repo.deleteDocument(DocumentDetail, options);
  return {}
}

async function getDocumentDetail(req, id) {
  const documentID = ObjectId(id);
  const page = req.query.page || 0;
  const documents = await repo.getFiles(page, documentID);
  await Promise.all(documents.map(async (element) => {
    element.pathFile = `${process.env.LOCALHOST}/${element.pathFile}`
  }))
  return documents
}

export default {
  createDocumentDetail,
  deleteDocumentDetail,
  getDocumentDetail
}
