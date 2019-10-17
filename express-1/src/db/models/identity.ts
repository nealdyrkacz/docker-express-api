import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { Association, HasOneGetAssociationMixin, HasOneCreateAssociationMixin } from 'sequelize';
import { User } from './user'

import * as bcrypt from "bcryptjs";

export class Identity extends Model {
  public id!: string; // Note that the `null assertion` `!` is required in strict mode.
  public username!: string;
  public password!: string;
  public UserId: string;
  public active!: boolean;
 
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getUser!: HasOneGetAssociationMixin<User>; // Note the null assertions!

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  public readonly user?: User; // Note this is optional since it's only populated when explicitly requested in code

  public static associations: {
    user: Association<Identity, User>;
  };

  public validatePassword(password: string) : boolean {
    return bcrypt.compareSync(password, this.password)
  }
}

export function initIdentity(sequelize: Sequelize): void {
  Identity.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserId: {
      type: DataTypes.UUID,
      allowNull: true
    },
    active: {
      type:DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  }, {
    tableName: 'Identity', 
    sequelize: sequelize, // this bit is important
  });
  
}

export function associateIdentity(): void {
  // Here we associate which actually populates out pre-declared `association` static and other methods.
  Identity.belongsTo(User, {targetKey: 'id'});
}

