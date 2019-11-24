import lodash from 'lodash'
import service from './service';
import to from '../../utils/to'
import { handleResponse } from '../../utils/handle-response'

const index = async (req, res) => {
  const [error, listLanguages] = await to(service.getListLanguagePrograms(req));
  const data = (listLanguages.length) ? { listLanguages: [...listLanguages] } : {};
  handleResponse(error, data, req, res);
};

const show = async (req, res) => {
  const { params } = req;
  const languageProgramID = params.id;
  const [error, languageProgram] = await to(service.getDetailLanguageProgram(languageProgramID));
  handleResponse(error, languageProgram, req, res);
};

async function create(req, res) {
  const ALLOWED_ATTRIBUTE = ['name', 'brief'];
  const newDatalanguageProgram = lodash.pick(req.body, ALLOWED_ATTRIBUTE);
  const [error, languageProgram] = await to(service.createLanguageProgram(newDatalanguageProgram));
  handleResponse(error, languageProgram, req, res);
}

async function remove(req, res) {
  const { params } = req;
  const languageProgramID = params.id;
  const [error, languageProgramUpdate] = await to(service.removeLanguageProgram(languageProgramID));
  handleResponse(error, languageProgramUpdate, req, res);
}

export default {
  index,
  show,
  create,
  remove
}
