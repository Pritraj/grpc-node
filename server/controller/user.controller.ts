
import { GetUserRequest, GetUserResponse, CreateUserRequest, CreateUserResponse, User } from '../../generated/user_pb';
import { UserService } from '../service/user.service';

export class UserController {
  private userService: UserService;
  
  constructor() {
    this.userService = new UserService();
  }
  
  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    const userId = request.getId();
    const user = await this.userService.getUserById(userId);

    const response = new GetUserResponse();
    const usr = new User();
    usr.setId(user.id);
    usr.setName(user.name);
    usr.setEmail(user.email);
    response.setUser(usr);
    
    return response;
  }
  
  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    const userData = {
      name: request.getName(),
      email: request.getEmail()
    };
    
    const createdUser = await this.userService.createUser(userData);

    const response = new CreateUserResponse();
    const usr = new User();
    usr.setId(createdUser.id);
    usr.setName(createdUser.name);
    usr.setEmail(createdUser.email);
    response.setUser(usr);
    
    return response;
  }
}