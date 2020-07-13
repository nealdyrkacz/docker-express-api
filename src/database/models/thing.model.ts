import { Model, DataTypes, Sequelize } from 'sequelize';
import { database } from '../config/database';
import { Identity } from './identity.model';

export class Thing extends Model {
  public id!: string;
  public type!: string;
  public identityId: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export interface ThingView {
  id: string;
  type: string;
  identityId: string;
}

export function initThing(sequelize: Sequelize): void {
  Thing.init(
    {
      id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      identityId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // underscored: true,
      tableName: 'thing',
      sequelize: sequelize, // this bit is important
    },
  );
}
