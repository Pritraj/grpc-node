import { UserDao } from "../dao/user.dao";
import { User } from "../model/user.model";

export class UserService {
  private userDao: UserDao;
  
  constructor() {
    this.userDao = new UserDao();
  }
  
  async getUserById(id: string): Promise<User> {
    const user = await this.userDao.findById(id);
    if (!user) {
      throw new Error(`User not found: ${id}`);
    }
    return user;
  }
  
  async createUser(userData: Partial<User>): Promise<User> {
    // Validation logic here
    if (!userData.name || !userData.email) {
      throw new Error('Name and email are required');
    }
    
    return this.userDao.create(new User(userData));
  }
}