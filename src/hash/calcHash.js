import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { join } from 'path';
import { throwError } from '../utils/utils.js';

const calculateHash = async () => {
  const sourceFile = join(
    import.meta.dirname,
    'files',
    'fileToCalculateHashFor.txt'
  );
  const hash = createHash('sha256');
  const stream = createReadStream(sourceFile);

  return new Promise((resolve, reject) => {
    stream.on('data', (data) => {
      hash.update(data);
    });

    stream.on('end', () => {
      const hexHash = hash.digest('hex');
      console.log(hexHash);
      resolve(hexHash);
    });

    stream.on('error', (e) => {
      reject(throwError());
    });
  });
};

await calculateHash();
