import { readFile } from 'fs/promises';
import { join } from 'path';
import { throwError } from '../utils/utils.js';

const read = async () => {
  const sourceFile = join(import.meta.dirname, 'files', 'fileToRead.txt');

  try {
    console.log(await readFile(sourceFile, 'utf-8'));
  } catch (e) {
    console.error(`Can not read fileToRead file!`);
    throwError();
  }
};

await read();
