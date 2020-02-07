import { ObjectSchema } from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

export const validator = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i: { message: string }) => i.message.replace(new RegExp('"', 'g'), "'")).join(',');
      res.status(422).json({ error: message });
    }
  };
};
