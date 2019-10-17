'use strict'
var moment = require('moment');
var uuidv4 = require('uuid/v4');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {   
      // User
      const user1Id = uuidv4();
      await queryInterface.bulkInsert('User', 
        [
          {
            id:user1Id,
            createdAt: new Date( moment.utc().format() ), 
            updatedAt: new Date( moment.utc().format() )
          }
        ], 
      )
      await queryInterface.bulkInsert('Identity', 
        [
          {
            id:uuidv4(),
            username: "user1",
            password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
            UserId: user1Id,
            createdAt: new Date( moment.utc().format() ), 
            updatedAt: new Date( moment.utc().format() )
          }
        ], 
      )

      const user2Id = uuidv4();
      await queryInterface.bulkInsert('User', 
        [
          {
            id:user2Id,
            createdAt: new Date( moment.utc().format() ), 
            updatedAt: new Date( moment.utc().format() )
          }
        ], 
      )
      await queryInterface.bulkInsert('Identity', 
        [
          {
            id:uuidv4(),
            username: "user2",
            password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
            UserId: user2Id,
            createdAt: new Date( moment.utc().format() ), 
            updatedAt: new Date( moment.utc().format() )
          }
        ], 
      )

      const user3Id = uuidv4();
      await queryInterface.bulkInsert('User', 
        [
          {
            id:user3Id,
            createdAt: new Date( moment.utc().format() ), 
            updatedAt: new Date( moment.utc().format() )
          }
        ], 
      )
      await queryInterface.bulkInsert('Identity', 
        [
          {
            id:uuidv4(),
            username: "user3",
            password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
            UserId: user3Id,
            createdAt: new Date( moment.utc().format() ), 
            updatedAt: new Date( moment.utc().format() )
          }
        ], 
      )

      
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete({ tableName: 'User'}, null, {})
  }
}
