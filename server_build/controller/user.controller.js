"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_pb_1 = require("../../generated/user_pb");
const user_service_1 = require("../service/user.service");
class UserController {
    constructor() {
        this.userService = new user_service_1.UserService();
    }
    getUser(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = request.getId();
            const user = yield this.userService.getUserById(userId);
            const response = new user_pb_1.GetUserResponse();
            const usr = new user_pb_1.User();
            usr.setId(user.id);
            usr.setName(user.name);
            usr.setEmail(user.email);
            response.setUser(usr);
            return response;
        });
    }
    createUser(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = {
                name: request.getName(),
                email: request.getEmail()
            };
            const createdUser = yield this.userService.createUser(userData);
            const response = new user_pb_1.CreateUserResponse();
            const usr = new user_pb_1.User();
            usr.setId(createdUser.id);
            usr.setName(createdUser.name);
            usr.setEmail(createdUser.email);
            response.setUser(usr);
            return response;
        });
    }
}
exports.UserController = UserController;
