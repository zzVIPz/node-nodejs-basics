import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { join } from 'path';
import { throwError } from '../utils/utils.js';

const decompress = async () => {
  const sourceFile = join(import.meta.dirname, 'files', 'archive.gz');
  const outputFile = join(import.meta.dirname, 'files', 'fileToCompress.txt');
  const readStream = createReadStream(sourceFile);
  const writeStream = createWriteStream(outputFile);
  const gunzipStream = createGunzip();

  readStream.pipe(gunzipStream).pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('Decompressing is done!');
  });

  writeStream.on('error', (e) => {
    throwError();
  });
};

await decompress();
