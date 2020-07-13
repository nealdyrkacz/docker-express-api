import App from './app';
import dotenv from 'dotenv';
//import { db } from './database/models/index';

async function start() {
  // initialize configuration
  // eslint-disable-next-line @typescript-eslint/no-var-requires

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('./database/models/index');
  //console.log(db.sequelize);
  dotenv.config();

  const app = new App();

  //await app.connectDatabase();//
  app.start();
}

start();
