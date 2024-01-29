import { writeFile } from 'fs/promises';
import { join } from 'path';
import { isSourceExist, throwError } from '../utils/utils.js';

const create = async () => {
  const sourceFile = join(import.meta.dirname, 'files', 'fresh.txt');

  if (await isSourceExist(sourceFile)) {
    console.error(
      `FS operation failed: File already exists. Please delete it from 'files' folder and try again`
    );
    throwError();
  } else {
    await writeFile(sourceFile, 'I am fresh and young');
    console.log(`File was successfully created!`);
  }
};

await create();
