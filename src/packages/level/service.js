import repo from './repository'
import { commonLocale } from '../../locales'

const getListLevels = async (req) => {
  const page = req.query.page || 0;
  const levels = await repo.getLevels(page);
  return levels;
};

const getDetailLevel = async (id) => {
  const level = await repo.getLevelByID(id);
  if (!level) {
    throw new Error(JSON.stringify((commonLocale.notFound)))
  }
  return level;
};

const createLevel = async (data) => {
  const level = await repo.createNewLevel(data);
  return level;
};

const removeLevel = async (id) => {
  const level = await repo.deleteLevel(id);
  if (!level) {
    throw new Error(JSON.stringify((commonLocale.notFound)))
  }
  return level;
};

export default {
  getListLevels,
  getDetailLevel,
  createLevel,
  removeLevel
}
