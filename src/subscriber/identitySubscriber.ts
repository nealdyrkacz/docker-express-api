import { EventSubscriber, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import Identity from '../entity/identity';
import * as bcrypt from 'bcrypt';

@EventSubscriber()
export class IdentitySubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Identity;
  }
  beforeInsert(event: InsertEvent<Identity>) {
    event.entity.password = bcrypt.hashSync(event.entity.password, bcrypt.genSaltSync(10));
  }
}
