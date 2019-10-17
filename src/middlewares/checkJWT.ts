import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const checkJWT = (req: Request, res: Response, next: NextFunction) => {
  //Get the jwt token from the head
  let token: string;
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') { 
    token = <string>req.headers.authorization.split(' ')[1];
  }else{
    res.status(500).send({error: "There was an error with authentication provided"});
    return;
  }
  
  let jwtPayload;
  
  //Try to validate the token and get data
  try {
    jwtPayload = <any>jwt.verify(token, process.env.JWT_SECRET);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    res.status(401).send({error: "Unauthorized!"});
    return;
  }

  //The token is valid for 1 hour
  //We want to send a new token on every request
  const { identityId, username } = jwtPayload;
  const newToken = jwt.sign({ identityId, username }, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });
  res.setHeader("token", newToken);

  //Call the next middleware or controller
  next();
};