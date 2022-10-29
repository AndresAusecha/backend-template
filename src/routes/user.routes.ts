import { Application } from "express";
import userController from "../controllers/user.controller";
import { RoutesConfig } from "./routes.config";

export class UserRoutes extends RoutesConfig {
  constructor(app: Application) {
    super(app, 'UsersRoutes');
  }
  configureRoutes(): Application {
    this.app.post("/api/users/signup", userController.register)
    this.app.post("/api/users/signin", userController.login)

    return this.app;    
  }
}