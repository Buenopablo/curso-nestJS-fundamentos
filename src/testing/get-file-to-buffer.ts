import { createReadStream, ReadStream } from 'fs';

export const getFileBuffer = (filename: string) => {
  const readStream = createReadStream(filename);
  const chucks = [];
  return new Promise<{ buffer: Buffer; stream: ReadStream }>(
    (resolve, reject) => {
      readStream.on('data', (chuck) => chucks.push(chuck));

      readStream.on('error', (err) => reject(err));

      readStream.on('close', () => {
        resolve({
          buffer: Buffer.concat(chucks) as Buffer,
          stream: readStream,
        });
      });
    },
  );
};
