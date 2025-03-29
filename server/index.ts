import { Server, ServerCredentials } from '@grpc/grpc-js';

function main() {
  const server = new Server();
  server.bind("127.0.1.1:50051", ServerCredentials.createInsecure());
  console.log("Server running on port 50051");
}
main();