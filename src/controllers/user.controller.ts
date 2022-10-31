import * as jwt from 'jsonwebtoken';
import express from 'express';
import userService from "../services/user.service";
import { SECRET } from '../app';

class UserController {
  async register(req: express.Request, res: express.Response) {
    console.log(req.body);
    const { email, password, name } = req.body;
    try {
      await userService.register(email, password, name);
      res.status(201).send({ email, name });
    } catch (error) {
      console.log(error);
      
      res.status(500).send({ errorMessage: error.message });
    }
  }

  async login(req: express.Request, res: express.Response) {
    const { email, password } = req.body;
    try {
      await userService.login(email, password);
      const token = jwt.sign({ email }, SECRET);
      res.status(200).send({ access_token: token });
    } catch (error) {
      console.log(error);
      
      res.status(500).send({ errorMessage: error.message });
    }
  }

  //testing purposes
  async getPersonalInformation(req: express.Request, res: express.Response) {
    try {
      const authorizationToken = req.headers.authorization?.split("Bearer ")[1];
      const decodedInfo = jwt.verify(authorizationToken, SECRET);
            
      res.status(200).send(decodedInfo);
    } catch (error) {
      console.log(error);
      res.status(500).send({ errorMessage: error.message });
    }
  }
}

export default new UserController();
