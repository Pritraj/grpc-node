"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
function main() {
    const server = new grpc_js_1.Server();
    server.bind("127.0.1.1:50051", grpc_js_1.ServerCredentials.createInsecure());
    console.log("Server running on port 50051");
}
main();
