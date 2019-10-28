import { initUser, associateUser } from "./user";
import { initIdentity, associateIdentity } from "./identity";

const Sequelize = require('sequelize');

const env = <string>process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];


interface DB {
  [key: string]: any;
}

const sequelize = new Sequelize(config.database, config.username, config.password, config);

initUser(sequelize);
initIdentity(sequelize)

associateUser();
associateIdentity();

const db = {
  sequelize,
  Sequelize,
  User: sequelize.models.User,
  Identity: sequelize.models.Identity
}

module.exports = db;