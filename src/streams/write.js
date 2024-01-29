import { createWriteStream } from 'fs';
import { join } from 'path';
import { throwError } from '../utils/utils.js';

const write = async () => {
  const sourceFile = join(import.meta.dirname, 'files', 'fileToWrite.txt');
  const writeStream = createWriteStream(sourceFile);

  process.stdin.pipe(writeStream);

  writeStream.on('error', (e) => {
    throwError();
  });
};

await write();
