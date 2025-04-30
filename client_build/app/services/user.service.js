"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const core_1 = require("@angular/core");
const user_grpc_pb_1 = require("@generated/user_grpc_pb");
const user_pb_1 = require("@generated/user_pb");
const rxjs_1 = require("rxjs");
let UserService = class UserService {
    constructor() {
        this.client = new user_grpc_pb_1.UsersClient('http://localhost:8080', null);
    }
    createUserPromise(name, email, phoneNumber, role) {
        const request = new user_pb_1.CreateUserRequest();
        request.setName(name);
        request.setEmail(email);
        if (phoneNumber) {
            request.setPhoneNumber(phoneNumber);
        }
        if (role !== undefined) {
            request.setRole(role);
        }
        return this.client.createUser(request, (err, response) => {
            const user = response.getUser();
            if (err) {
                return Promise.reject(err);
            }
            if (response.getSuccess()) {
                if (user) {
                    return Promise.resolve(user);
                }
                else {
                    return Promise.reject(new Error('User was not returned in the successful response'));
                }
            }
            return Promise.reject(response.getError());
        });
    }
    createUser(name, email, phoneNumber, role) {
        return new rxjs_1.Observable(observer => {
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
};
UserService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], UserService);
exports.UserService = UserService;
