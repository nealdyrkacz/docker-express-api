import Identity from '../entity/identity';
import { Request } from 'express';
import UsernamePasswordError from '../errors/usernamePasswordError';
import JWTSignError from '../errors/jwtError';
import IdentityService from './identityService';
import * as jwt from 'jsonwebtoken';

export default class AuthService {
  static async authenticateIdentityWithUsernameAndPasswordFromRequest(req: Request): Promise<string> {
    const { username, password } = req.body;
    if (!(username && password)) {
      throw new UsernamePasswordError();
    }
    const identity: Identity = await IdentityService.getIdentityByUsername(username);

    if (!identity || !identity.validatePassword(password)) {
      throw new UsernamePasswordError();
    }

    try {
      return this.signJWT(identity);
    } catch (e) {
      throw new JWTSignError();
    }
  }

  private static signJWT(identity: Identity): string {
    //Sing JWT, valid for 1 hour
    return jwt.sign({ identityId: identity.id, username: identity.username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
  }
}
