import { Serializer } from 'ts-jsonapi';
import Identity from '../entity/identity';

export default class IdentitySerializer {
  static async serialize(identity: Identity): Promise<any> {
    const serializerOptions = {
      id: 'id',
      attributes: ['username'],
    };

    return new Serializer('identity', serializerOptions).serialize(identity);
  }
}
