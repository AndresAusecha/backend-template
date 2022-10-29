import { sqlManager } from "../../config/DBConnection";

class UsersDao {
  async getByEmailAndPassword(email: string, password: string){
    const user = await sqlManager`
      select * from users where email is ${email} and ${password}
    `
    return user;
  }

  async insert(email: string, password: string, name: string) {
    const user = await sqlManager`
      insert into users (email, password, name) values (${name}, ${password}, ${email})
    `
    return user;
  }
  
  update(){

  }
}

export default new UsersDao;