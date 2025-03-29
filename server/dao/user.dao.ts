import { User } from "../model/user.model";

export class UserDao {
  private users: User[] = [
    new User({ id: '1', name: 'John Doe', email: 'john@example.com' })
  ];
  
  async findById(id: string): Promise<User | null> {
    const user = this.users.find(u => u.id === id);
    return user || null;
  }
  
  async findAll(): Promise<User[]> {
    return [...this.users];
  }
  
  async create(user: User): Promise<User> {
    const newUser = new User({...user, id: Date.now().toString()});
    this.users.push(newUser);
    return newUser;
  }
}