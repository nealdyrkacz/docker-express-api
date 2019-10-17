import {Request, Response} from "express";
import express from "express";
import { AuthController } from "../controllers/authController";
import { checkJWT } from "../middlewares/checkJWT";

export class AuthRoutes {
    public authController: AuthController = new AuthController();
           
    public routes(app: express.Application): void {  
        
      app.route('/login')
        .post(this.authController.login)

      /*app.route('/change-password')
        .post([checkJWT], AuthController.changePassword)*/
    }
}