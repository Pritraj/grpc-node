import { Injectable } from '@angular/core';
import { UsersClient } from '@generated/user_grpc_pb';
import {CreateUserRequest, CreateUserResponse, GetUserRequest, User} from '@generated/user_pb'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private client: UsersClient;

  constructor() {
    this.client = new UsersClient('http://localhost:8080', null);
  }

  createUserPromise(name: string, email: string, phoneNumber?: string, role?: User.Role): Promise<User> {
    const request = new CreateUserRequest();
    request.setName(name);
    request.setEmail(email);
    
    if (phoneNumber) {
      request.setPhoneNumber(phoneNumber);
    }
    
    if (role !== undefined) {
      request.setRole(role);
    }

    return this.client.createUser(request, ( err, response: CreateUserResponse) => {
      const user = response.getUser();
      if (err) {
        return Promise.reject(err);
      }
      if (response.getSuccess()) {
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.reject(new Error('User was not returned in the successful response'));
        }
      }
      return Promise.reject(response.getError());
    });
  }

  createUser(name: string, email: string, phoneNumber?: string, role?: User.Role): Observable<User> {
    return new Observable<User>(observer => {
      this.createUserPromise(name, email, phoneNumber, role)
        .then(user => {
          observer.next(user);
          observer.complete();
        })
        .catch(err => {
          observer.error(err);
        });
    });
  }
}
