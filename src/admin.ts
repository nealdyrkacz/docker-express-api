/* eslint-disable @typescript-eslint/no-var-requires */
import AdminBro from 'admin-bro';
const AdminBroExpress = require('@admin-bro/express');
import AdminBroSequelize from '@admin-bro/sequelize';

import { db } from './database/models/';

AdminBro.registerAdapter(AdminBroSequelize);

const adminBroRoot = '/admin';

const adminBro = new AdminBro({
  databases: [db],
  rootPath: adminBroRoot,
});

export default AdminBroExpress.buildRouter(adminBro);
