import * as http from 'http';
import express from 'express';
import { RoutesConfig } from './routes/routes.config';
import { UserRoutes } from './routes/user.routes';
import { expressjwt as jwt } from 'express-jwt';

export const SECRET = "H4ta-h43hfHbE34tUOplK-3rE1";

const app = express();

app.use(express.json())

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(
  jwt({
    secret: SECRET,
    algorithms: ["HS256"],
  }).unless({ path: ["/api/users/signup", "/api/users/signin"] })
);

const port = 3000;

const routes: Array<RoutesConfig> = [];

routes.push(new UserRoutes(app));


const server = http.createServer(app);

server.listen(port, () => {
  console.log("Server is running on port: " + port)
});
