import { Sequelize } from 'sequelize';
import { Identity, initIdentity, associateIdentity } from './identity.model';
import { Thing, initThing } from './thing.model';

console.log('******************** DATABASE');
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

initIdentity(sequelize);
initThing(sequelize);

associateIdentity();

export const db = {
  sequelize,
  Sequelize,
  Identity: sequelize.models.Identity,
  Thing: sequelize.models.Thing,
};
