import App from './app';
import dotenv from 'dotenv';

async function start() {
  // initialize configuration
  dotenv.config();

  const app = new App();

  await app.connectDatabase();
  app.start();
}

start();
