import Joi, { ObjectSchema } from '@hapi/joi';

export const identitySchema: ObjectSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().optional(),
});
