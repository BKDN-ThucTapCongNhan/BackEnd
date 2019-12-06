const status = {
  Active: 1,
  unActive: 0
};

const role = {
  Admin: 0,
  Teacher: 1,
  Student: 2
}

const listStatus = [status.Active, status.unActive];

export default {
  status,
  listStatus,
  role,
  limit: {
    index: 20
  }
}
