import { Readable } from 'stream';

export interface File {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}

export interface S3StorageOptions {
  endpoint: string;
  bucketName: string;
  accessKeyId: string;
  secretAccessKey: string;
  s3ForcePathStyle: boolean;
  useSslOnly: boolean;
}

export interface FileReadStream {
  readStream: Readable;
  filename: string;
}

export interface QueryToken {
  token: string;
}
