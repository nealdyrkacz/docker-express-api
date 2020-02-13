import express from 'express';
import { AuthController } from '../controllers/authController';

export class AuthRoutes {
  public authController: AuthController = new AuthController();

  public routes(app: express.Application): void {
    app.route('/login').post(this.authController.login);

    /*app.route('/change-password')
        .post([checkJWT], AuthController.changePassword)*/
  }
}
