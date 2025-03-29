import { ServerUnaryCall, sendUnaryData, ServiceError, status, Metadata } from '@grpc/grpc-js';

// Helper to convert async handlers to gRPC callback style
export function handleUnaryCall<RequestType, ResponseType>(
  handler: (request: RequestType) => Promise<ResponseType>
) {
  return async (
    call: ServerUnaryCall<RequestType, ResponseType>,
    callback: sendUnaryData<ResponseType>
  ) => {
    try {
      const response = await handler(call.request);
      callback(null, response);
    } catch (error) {
      const serviceError: ServiceError = {
        code: status.INTERNAL,
        name: 'Internal Error',
        message: error instanceof Error ? error.message : String(error),
        details: '',
        metadata: new Metadata()
      };
      callback(serviceError, null);
    }
  };
}