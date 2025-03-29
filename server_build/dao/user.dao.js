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
exports.UserDao = void 0;
const user_model_1 = require("../model/user.model");
class UserDao {
    constructor() {
        this.users = [
            new user_model_1.User({ id: '1', name: 'John Doe', email: 'john@example.com' })
        ];
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.users.find(u => u.id === id);
            return user || null;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return [...this.users];
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new user_model_1.User(Object.assign(Object.assign({}, user), { id: Date.now().toString() }));
            this.users.push(newUser);
            return newUser;
        });
    }
}
exports.UserDao = UserDao;
