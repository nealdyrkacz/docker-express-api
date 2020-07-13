import { Request, Response } from 'express';
import { Identity } from '../database/models/identity.model';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { db } from '../database/models/';

export class IdentityController {
  public async getAll(req: Request, res: Response) {
    try {
      Identity.sequelize;
      //console.log(db.Identity);
      //const identities = await db.Identity.findAll({});
      const identities = await db.Identity.findAll({});
      console.log(Identity.sequelize);
      //console.log(await identities.);
    } catch (e) {
      console.log(e);
    }
    //
    return res.status(200).json({ status: '....' });
  }
}
