import { Request, Response } from 'express';
import { Identity } from '../database/models/identity.model';
import { db } from '../database/models/';

export class IdentityController {
  public async getAll(req: Request, res: Response) {
    try {
      Identity.sequelize;
      const identities = await db.Identity.findAll({});
    } catch (e) {
      console.log(e);
    }
    //
    return res.status(200).json({ status: '....' });
  }
}
