import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { Association, HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from 'sequelize';
import { Identity } from './identity';
export class User extends Model {
  public id!: string; // Note that the `null assertion` `!` is required in strict mode.
  public active!: boolean;
 
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getIdentities!: HasManyGetAssociationsMixin<Identity>; // Note the null assertions!
  public addIdentity!: HasManyAddAssociationMixin<Identity, number>;
  public hasIdentity!: HasManyHasAssociationMixin<Identity, number>;
  public countIdentities!: HasManyCountAssociationsMixin;
  public createIdentity!: HasManyCreateAssociationMixin<Identity>;

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  public readonly identities?: Identity[]; // Note this is optional since it's only populated when explicitly requested in code

  public static associations: {
    identities: Association<User, Identity>;
  };

}

export function initUser(sequelize: Sequelize): void {
  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    active: {
      type:DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  }, {
    tableName: 'User', 
    sequelize: sequelize, // this bit is important
  });

  
}

export function associateUser(): void {
  // Here we associate which actually populates out pre-declared `association` static and other methods.
  User.hasMany(Identity, {
    sourceKey: 'id',
    foreignKey: 'UserId',
    as: 'identities' // this determines the name in `associations`!
  });
}

