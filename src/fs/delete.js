import { unlink } from 'fs/promises';
import { join } from 'path';
import { throwError } from '../utils/utils.js';

const remove = async () => {
  const sourceFile = join(import.meta.dirname, 'files', 'fileToRemove.txt');

  try {
    await unlink(sourceFile);
    console.log(`File fileToRemove was successfully deleted!`);
  } catch (e) {
    console.error(`File fileToRemove does not exist!`);
    throwError();
  }
};

await remove();
