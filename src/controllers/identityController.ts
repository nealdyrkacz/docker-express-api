import { Request, Response } from 'express';
import IdentityService from '../services/identityService';

export class IdentityController {
  public async createIdentity(req: Request, res: Response) {
    await IdentityService.createIdentityFromRequest(req);
    return res.status(200).send('Identity Created In Database');
  }
}
