import lodash from 'lodash'
import service from './service';
import to from '../../utils/to'
import { handleResponse } from '../../utils/handle-response'

const index = async (req, res) => {
  const [error, levels] = await to(service.getListLevels(req));
  const data = (levels.length) ? { levels: [...levels] } : {};
  handleResponse(error, data, req, res);
};

const show = async (req, res) => {
  const { params } = req;
  const levelID = params.id;
  const [error, level] = await to(service.getDetailLevel(levelID));
  handleResponse(error, level, req, res);
};

async function create(req, res) {
  const ALLOWED_ATTRIBUTE = ['name', 'code'];
  const newDataLevel = lodash.pick(req.body, ALLOWED_ATTRIBUTE);
  const [error, level] = await to(service.createLevel(newDataLevel));
  handleResponse(error, level, req, res);
}

async function remove(req, res) {
  const { params } = req;
  const levelID = params.id;
  const [error, levelUpdate] = await to(service.removeLevel(levelID));
  handleResponse(error, levelUpdate, req, res);
}

export default {
  index,
  show,
  create,
  remove
}
