/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

module.exports = {
  async up(queryInterface, Sequelize) {
    // User
    const user1Id = uuidv4();
    await queryInterface.bulkInsert('identity', [
      {
        id: user1Id,
        username: 'user1@email.com',
        name: 'User 1',
        createdAt: new Date(moment.utc().format()),
        updatedAt: new Date(moment.utc().format()),
      },
    ]);
    await queryInterface.bulkInsert('thing', [
      {
        id: uuidv4(),
        type: 'car',
        identityId: user1Id,
        createdAt: new Date(moment.utc().format()),
        updatedAt: new Date(moment.utc().format()),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete({ tableName: 'identity' }, null, {});
    await queryInterface.bulkDelete({ tableName: 'thing' }, null, {});
  },
};
