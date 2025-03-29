import { Server, ServerCredentials } from '@grpc/grpc-js';

async function main() {
  const server = new Server();
  server.bindAsync("127.0.0.1:50051", ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Server running on http://localhost:${port}`);
  });
}

main().catch(console.error)