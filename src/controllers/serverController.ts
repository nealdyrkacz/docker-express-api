import { Request, Response } from 'express';
import { Identity } from '../database/models/identity.model';

export class ServerController {
  public async getStatus(req: Request, res: Response) {
    try {
      const identities = await Identity.findAll({});
      console.log(await identities[0].getThings());
    } catch (e) {
      console.log(e);
    }
    return res.status(200).send('crema-app-api server up and running!');
  }
}
