// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var dummy_pb = require('./dummy_pb.js');

function serialize_dummy_Dummy(arg) {
  if (!(arg instanceof dummy_pb.Dummy)) {
    throw new Error('Expected argument of type dummy.Dummy');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dummy_Dummy(buffer_arg) {
  return dummy_pb.Dummy.deserializeBinary(new Uint8Array(buffer_arg));
}


var DummyServiceService = exports.DummyServiceService = {
  getDummy: {
    path: '/dummy.DummyService/GetDummy',
    requestStream: false,
    responseStream: false,
    requestType: dummy_pb.Dummy,
    responseType: dummy_pb.Dummy,
    requestSerialize: serialize_dummy_Dummy,
    requestDeserialize: deserialize_dummy_Dummy,
    responseSerialize: serialize_dummy_Dummy,
    responseDeserialize: deserialize_dummy_Dummy,
  },
};

exports.DummyServiceClient = grpc.makeGenericClientConstructor(DummyServiceService, 'DummyService');
