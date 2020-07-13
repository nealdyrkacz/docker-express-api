'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      { tableName: 'thing' },
      {
        id: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
        },
        type: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        identityId: {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: {
              tableName: 'identity',
            },
            key: 'id',
          },
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
          defaultValue: Sequelize.DataTypes.NOW,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
          defaultValue: Sequelize.DataTypes.NOW,
        },
      },
    );
  },
  down: queryInterface => {
    return queryInterface.dropTable({ tableName: 'thing' });
  },
};
