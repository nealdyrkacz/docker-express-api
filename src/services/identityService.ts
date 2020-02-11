import Identity from '../entity/identity';
import { Request } from 'express';
import { getConnection, getManager } from 'typeorm';

class IdentityService {
  static async createIdentityFromRequest(req: Request): Promise<Identity> {
    const { username, password } = req.body;
    const identity = new Identity();
    identity.username = username;
    identity.password = password;

    return await this.createIdentity(identity);
  }
  static async getIdentityByUsername(username: string): Promise<Identity> {
    return await getConnection()
      .createQueryBuilder()
      .select('identity')
      .from(Identity, 'identity')
      .where('identity.username = :username', { username: username })
      .getOne();
  }

  private static async createIdentity(identity: Identity): Promise<Identity> {
    return await getManager().save(identity);
  }
}

export default IdentityService;
