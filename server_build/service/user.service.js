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
exports.UserService = void 0;
const user_dao_1 = require("../dao/user.dao");
const user_model_1 = require("../model/user.model");
class UserService {
    constructor() {
        this.userDao = new user_dao_1.UserDao();
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userDao.findById(id);
            if (!user) {
                throw new Error(`User not found: ${id}`);
            }
            return user;
        });
    }
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validation logic here
            if (!userData.name || !userData.email) {
                throw new Error('Name and email are required');
            }
            return this.userDao.create(new user_model_1.User(userData));
        });
    }
}
exports.UserService = UserService;
