import { Sequelize } from 'sequelize';

console.log('*************** DB');
export const database = new Sequelize({
  database: 'lab1',
  dialect: 'postgres',
  username: 'nealdyrkacz',
  password: '',
});
