const gender = {
  male: 'male',
  female: 'female'
};

const role = {
  Admin: 0,
  Teacher: 1,
  Student: 2
}

const roles = [role.Admin, role.Manager, role.Teacher, role.Student];

const genders = [gender.male, gender.female];

const status = {
  Active: 1,
  unActive: 0
};

const listStatus = [status.Active, status.unActive];

export default {
  gender,
  genders,
  status,
  role,
  roles,
  listStatus,
  limit: {
    index: 20
  }
}
