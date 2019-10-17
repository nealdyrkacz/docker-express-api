import { User } from '../db/models/user'
import { Identity } from '../db/models/identity'
import { Request, Response } from 'express';
import * as jwt from "jsonwebtoken";

export class AuthController{

  public async login ( req: Request, res: Response) {
    //Check if username and password are set
    let { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send();
    }

    //Get user from database
    let identity: Identity;
    try {
      identity = await Identity.findOne({
        where: {
          username: username
        }
      })
      if( !identity ) throw "Incorrect username/password";

    } catch (error) {
      res.status(401).send({error: error});
      return;
    }

   //Check if encrypted password match
    if (await !identity.validatePassword(password)) {
      res.status(401).send();
      return;
    }

    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
      { identityId: identity.id, username: identity.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    //Send the jwt in the response
    res.status(200).send(token);
  }
}