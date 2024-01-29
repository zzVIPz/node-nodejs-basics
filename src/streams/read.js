import { createReadStream } from 'fs';
import { join } from 'path';
import { throwError } from '../utils/utils.js';

const read = async () => {
  const sourceFile = join(import.meta.dirname, 'files', 'fileToRead.txt');
  const readStream = createReadStream(sourceFile);

  readStream.on('data', (data) => {
    process.stdout.write(data);
  });

  readStream.on('error', (e) => {
    throwError();
  });
};

await read();
