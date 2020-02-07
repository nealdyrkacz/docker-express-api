import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JWTPayload {
  identityId: string;
  username: string;
}

export const authorize = (req: Request, res: Response, next: NextFunction) => {
  //Get the jwt token from the head
  let token: string;
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    token = req.headers.authorization.split(' ')[1];
  } else {
    res.status(500).send({ error: 'There was an error with authentication provided' });
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let jwtPayload: any;

  //Try to validate the token and get data
  try {
    jwtPayload = jwt.verify(token, process.env.API_JWT_SECRET);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    res.status(401).send({ error: 'Unauthorized!' });
    return;
  }

  //The token is valid for 1 hour
  //We want to send a new token on every request
  const { identityId, username } = jwtPayload;
  const newToken = jwt.sign({ identityId, username }, process.env.API_JWT_SECRET, {
    expiresIn: '1h',
  });
  res.setHeader('token', newToken);

  //Call the next middleware or controller
  next();
};
