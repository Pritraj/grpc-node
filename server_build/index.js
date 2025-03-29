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
const grpc_js_1 = require("@grpc/grpc-js");
const service_helper_1 = require("./util/service-helper");
const user_controller_1 = require("./controller/user.controller");
const user_grpc_pb_1 = require("../generated/user_grpc_pb");
// Create promise-based server binding
const bindServer = (server, address) => {
    return new Promise((resolve, reject) => {
        server.bindAsync(address, grpc_js_1.ServerCredentials.createInsecure(), (err, port) => {
            if (err)
                reject(err);
            else
                resolve(port);
        });
    });
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new grpc_js_1.Server();
        const userController = new user_controller_1.UserController();
        // Register service with async handlers
        server.addService(user_grpc_pb_1.UsersService, {
            getUser: (0, service_helper_1.handleUnaryCall)((req) => userController.getUser(req)),
            createUser: (0, service_helper_1.handleUnaryCall)((req) => userController.createUser(req)),
        });
        try {
            const port = yield bindServer(server, "127.0.0.1:50051");
            console.log(`gRPC server running on http://localhost:${port}`);
        }
        catch (error) {
            console.error('Failed to start server:', error);
        }
    });
}
main().catch(console.error);
