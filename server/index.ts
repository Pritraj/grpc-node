import { Server, ServerCredentials, ServiceDefinition } from '@grpc/grpc-js';
import { handleUnaryCall } from './util/service-helper';
import { UserController } from './controller/user.controller';
import { UsersService } from '../generated/user_grpc_pb';

// Create promise-based server binding
const bindServer = (server: Server, address: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    server.bindAsync(address, ServerCredentials.createInsecure(), (err, port) => {
      if (err) reject(err);
      else resolve(port);
    });
  });
};

async function main() {
  const server = new Server();
  const userController = new UserController();
  
  // Register service with async handlers
  server.addService(UsersService as any, {
    getUser: handleUnaryCall((req) => userController.getUser(req)),
    createUser: handleUnaryCall((req) => userController.createUser(req)),
  });

  try {
    const port = await bindServer(server, "127.0.0.1:50051");
    console.log(`gRPC server running on http://localhost:${port}`);
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

main().catch(console.error);