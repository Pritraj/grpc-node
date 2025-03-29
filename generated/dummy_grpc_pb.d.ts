// package: dummy
// file: dummy.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as dummy_pb from "./dummy_pb";

interface IDummyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getDummy: IDummyServiceService_IGetDummy;
}

interface IDummyServiceService_IGetDummy extends grpc.MethodDefinition<dummy_pb.Dummy, dummy_pb.Dummy> {
    path: "/dummy.DummyService/GetDummy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dummy_pb.Dummy>;
    requestDeserialize: grpc.deserialize<dummy_pb.Dummy>;
    responseSerialize: grpc.serialize<dummy_pb.Dummy>;
    responseDeserialize: grpc.deserialize<dummy_pb.Dummy>;
}

export const DummyServiceService: IDummyServiceService;

export interface IDummyServiceServer {
    getDummy: grpc.handleUnaryCall<dummy_pb.Dummy, dummy_pb.Dummy>;
}

export interface IDummyServiceClient {
    getDummy(request: dummy_pb.Dummy, callback: (error: grpc.ServiceError | null, response: dummy_pb.Dummy) => void): grpc.ClientUnaryCall;
    getDummy(request: dummy_pb.Dummy, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dummy_pb.Dummy) => void): grpc.ClientUnaryCall;
    getDummy(request: dummy_pb.Dummy, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dummy_pb.Dummy) => void): grpc.ClientUnaryCall;
}

export class DummyServiceClient extends grpc.Client implements IDummyServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getDummy(request: dummy_pb.Dummy, callback: (error: grpc.ServiceError | null, response: dummy_pb.Dummy) => void): grpc.ClientUnaryCall;
    public getDummy(request: dummy_pb.Dummy, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dummy_pb.Dummy) => void): grpc.ClientUnaryCall;
    public getDummy(request: dummy_pb.Dummy, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dummy_pb.Dummy) => void): grpc.ClientUnaryCall;
}
