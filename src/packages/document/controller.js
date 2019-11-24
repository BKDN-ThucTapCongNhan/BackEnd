import service from './service'
import to from '../../utils/to'
import { handleResponse } from '../../utils/handle-response'

async function createDocument(req, res) {
  const [error, resutl] = await to(service.createDocumentDetail(req));
  handleResponse(error, resutl, req, res);
}

async function removeDocument(req, res) {
  const documentID = req.params.id;
  const [error, resutl] = await to(service.deleteDocumentDetail(documentID));
  handleResponse(error, resutl, req, res);
}

async function getDocument(req, res) {
  const documentID = req.params.id;
  const [error, resutl] = await to(service.getDocumentDetail(req, documentID));
  const data = (resutl.length) ? { document: [...resutl] } : {};
  handleResponse(error, data, req, res);
}

export default {
  createDocument,
  removeDocument,
  getDocument
}
