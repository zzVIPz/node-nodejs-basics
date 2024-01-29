import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { join } from 'path';
import { throwError } from '../utils/utils.js';

const compress = async () => {
  const sourceFile = join(import.meta.dirname, 'files', 'fileToCompress.txt');
  const outputFile = join(import.meta.dirname, 'files', 'archive.gz');
  const readStream = createReadStream(sourceFile);
  const writeStream = createWriteStream(outputFile);
  const gzipStream = createGzip();

  readStream.pipe(gzipStream).pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('Compressing is done!');
  });

  writeStream.on('error', (e) => {
    throwError();
  });
};

await compress();
