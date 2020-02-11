import { Request, Response } from 'express';
import IdentityService from '../services/identityService';
import IdentitySerializer from '../serializers/identitySerializer';

export class IdentityController {
  public async createIdentity(req: Request, res: Response) {
    const newIdentity = await IdentityService.createIdentityFromRequest(req);
    return res.status(200).json(await IdentitySerializer.serialize(newIdentity));
  }
}
