import md5 from 'md5'
import serviceAdmin from '../packages/admin/service'
import repoAdmin from '../packages/admin/repository'

export default async function () {
  try {
    const email = process.env.EMAIL_ADMIN;
    const password = process.env.PASS_ADMIN;
    const md5Password = md5(password);
    const admin = await repoAdmin.findOne({ email });
    if (admin) {
      return admin;
    }
    const newData = {
      email,
      password: md5Password
    };
    return await serviceAdmin.create(newData);
  } catch (error) {
    console.log('Error create admin!');
    console.log('\x1b[31m', '*** PLEASE CHECK AGAIN', '\x1b[0m');
    process.exit(1)
  }
}
