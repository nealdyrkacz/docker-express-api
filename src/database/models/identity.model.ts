import { Model, DataTypes, HasManyGetAssociationsMixin, Association, Sequelize } from 'sequelize';
import { database } from '../config/database';
import { Thing } from './thing.model';

export class Identity extends Model {
  public id!: string;
  public username!: string;
  public name!: string;
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getThings!: HasManyGetAssociationsMixin<Thing>; // Note the null assertions!

  public static associations: {
    things: Association<Identity, Thing>;
  };
}

export interface IdentityView {
  id: string;
  username: string;
  name: string;
}

export function initIdentity(sequelize: Sequelize): void {
  Identity.init(
    {
      id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      sequelize: sequelize,
      tableName: 'identity',
    },
  );
}

export function associateIdentity(): void {
  Identity.hasMany(Thing, {
    sourceKey: 'id',
    foreignKey: 'identityId',
    as: 'things', // this determines the name in `associations`!
  });
}
