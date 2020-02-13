import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export default class Identity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  /*@BeforeInsert()
  generatePasswordHash() {
    console.log('GENERATE');
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
  }*/

  validatePassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}
