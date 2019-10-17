import {Request, Response} from "express";
import express from "express";
import { UserController } from "../controllers/userController";
import { checkJWT } from "../middlewares/checkJWT";

export class UserRoutes {
    public userController: UserController = new UserController();
           
    public routes(app: express.Application): void {  
        
      app.route('/users')
        .get([checkJWT], this.userController.getUsers)
    }
}