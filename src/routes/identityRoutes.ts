//import { Request, Response } from 'express';
import express from 'express';
import { IdentityController } from '../controllers/identityController';
import { validator } from '../middleware/validator';
import { identitySchema } from '../validation/identityValidator';

export class IdentityRoutes {
  public identityController: IdentityController = new IdentityController();

  public routes(app: express.Application): void {
    app.route('/identity').get([], this.identityController.getAll);
  }
}
