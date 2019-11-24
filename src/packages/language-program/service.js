import repo from './repository'
import { commonLocale } from '../../locales'

const getListLanguagePrograms = async (req) => {
  const page = req.query.page || 0;
  const languagePrograms = await repo.getLanguagePrograms(page);
  return languagePrograms;
};

const getDetailLanguageProgram = async (id) => {
  const languageProgram = await repo.getLanguageProgramByID(id);
  if (!languageProgram) {
    throw new Error(JSON.stringify((commonLocale.notFound)))
  }
  return languageProgram;
};

const createLanguageProgram = async (data) => {
  const languageProgram = await repo.createNewLanguageProgram(data);
  return languageProgram;
};

const removeLanguageProgram = async (id) => {
  const languageProgram = await repo.deleteLanguageProgram(id);
  if (!languageProgram) {
    throw new Error(JSON.stringify((commonLocale.notFound)))
  }
  return languageProgram;
};

export default {
  getListLanguagePrograms,
  getDetailLanguageProgram,
  createLanguageProgram,
  removeLanguageProgram
}
