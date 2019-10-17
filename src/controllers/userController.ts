
import { Request, Response } from 'express';
import { User } from '../db/models/user'
import { Identity } from  '../db/models/identity';

export class UserController{

  public async getUsers ( req: Request, res: Response) {
    let users = await User.findAll(
      { 
        include:
        [
          {
          model: Identity, as: 'identities',
          attributes: { exclude: ["password"] }
          }
        ]
      })

    return res.status(200).json(users)
  }
}