import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '@generated/user_pb';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface UserForm {
  name: string;
  email: string;
  phoneNumber?: string;
  role?: number;
}

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.sass'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  newUser: UserForm = {
    name: '',
    email: '',
    phoneNumber: '',
    role: undefined
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.listUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (err) => {
        console.error('Error loading users:', err);
      }
    });
  }

  addUser(): void {
    this.userService.createUser(
      this.newUser.name,
      this.newUser.email,
      this.newUser.phoneNumber,
      this.newUser.role
    ).subscribe({
      next: (user) => {
        this.users.push(user);
        // Reset form
        this.newUser = {
          name: '',
          email: '',
          phoneNumber: '',
          role: undefined
        };
      },
      error: (err) => {
        console.error('Error creating user:', err);
      }
    });
  }

}
