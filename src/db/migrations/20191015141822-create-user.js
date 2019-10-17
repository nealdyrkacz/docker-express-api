'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable({tableName:'User'}, {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
    })
  },
  down: (queryInterface) => {
    return queryInterface.dropTable({tableName:'User', schema:'public'})
  }
}