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
exports.handleUnaryCall = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
// Helper to convert async handlers to gRPC callback style
function handleUnaryCall(handler) {
    return (call, callback) => __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield handler(call.request);
            callback(null, response);
        }
        catch (error) {
            const serviceError = {
                code: grpc_js_1.status.INTERNAL,
                name: 'Internal Error',
                message: error instanceof Error ? error.message : String(error),
                details: '',
                metadata: new grpc_js_1.Metadata()
            };
            callback(serviceError, null);
        }
    });
}
exports.handleUnaryCall = handleUnaryCall;
