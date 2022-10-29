import usersDao from "../DAOS/users.dao";

class UserService {
  register(email: string, password: string, name: string) {
    if (email && password && name) {
      return usersDao.insert(email, password, name)
    }
    throw new Error("Invalid data");
    
  }

  login(email: string, password: string) {
    if (email && password) {
      return usersDao.getByEmailAndPassword(email, password)
    }
    throw new Error("Invalid credentials");
  }
}

export default new UserService();