import AuthService from '../services/authService';
import { Request, Response } from 'express';

export class AuthController {
  public async login(req: Request, res: Response) {
    try {
      const token = await AuthService.authenticateIdentityWithUsernameAndPasswordFromRequest(req);
      res.status(200).send(token);
    } catch (e) {
      res.status(401).send(e.message);
    }
  }
}
