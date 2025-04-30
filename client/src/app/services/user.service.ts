import { Injectable } from '@angular/core';
import { CreateUserRequest, ListUsersRequest, User } from '@generated/user_pb';
import { Observable } from 'rxjs';
import { UsersClient } from '@generated/user_grpc_pb';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private client: UsersClient;

  constructor() {
    this.client = new UsersClient(environment.grpcUrl, null);
  }

  createUser(name: string, email: string, phoneNumber?: string, role?: User.Role): Observable<User> {
    const request = new CreateUserRequest();
    request.setName(name);
    request.setEmail(email);
    
    if (phoneNumber) {
      request.setPhoneNumber(phoneNumber);
    }
    
    if (role !== undefined) {
      request.setRole(role);
    }

    return new Observable<User>(observer => {
      this.client.createUser(request, {}, (err, response) => {
        if (err) {
          observer.error(err);
          return;
        }
        if (response.getSuccess()) {
          const user = response.getUser();
          if (user) {
            observer.next(user);
          } else {
            observer.error(new Error('User was not returned in the successful response'));
          }
        } else {
          observer.error(response.getError());
        }
        observer.complete();
      });
    });
  }

  listUsers(): Observable<User[]> {
    const request = new ListUsersRequest();
    
    return new Observable<User[]>(observer => {
      this.client.listUsers(request, {}, (err, response) => {
        if (err) {
          observer.error(err);
          return;
        }
        observer.next(response.getUsersList());
        observer.complete();
      });
    });
  }
}