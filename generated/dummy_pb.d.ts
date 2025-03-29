// package: dummy
// file: dummy.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Dummy extends jspb.Message { 
    getName(): string;
    setName(value: string): Dummy;
    getAge(): number;
    setAge(value: number): Dummy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dummy.AsObject;
    static toObject(includeInstance: boolean, msg: Dummy): Dummy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Dummy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dummy;
    static deserializeBinaryFromReader(message: Dummy, reader: jspb.BinaryReader): Dummy;
}

export namespace Dummy {
    export type AsObject = {
        name: string,
        age: number,
    }
}

export class DummyResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): DummyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DummyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DummyResponse): DummyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DummyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DummyResponse;
    static deserializeBinaryFromReader(message: DummyResponse, reader: jspb.BinaryReader): DummyResponse;
}

export namespace DummyResponse {
    export type AsObject = {
        message: string,
    }
}

export class DummyRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DummyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DummyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DummyRequest): DummyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DummyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DummyRequest;
    static deserializeBinaryFromReader(message: DummyRequest, reader: jspb.BinaryReader): DummyRequest;
}

export namespace DummyRequest {
    export type AsObject = {
        name: string,
    }
}
