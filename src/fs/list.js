import { readdir } from 'fs/promises';
import { join } from 'path';
import { throwError, isSourceExist } from '../utils/utils.js';

const list = async () => {
  const sourceFolder = join(import.meta.dirname, 'files');

  if (await isSourceExist(sourceFolder)) {
    const entries = await readdir(sourceFolder);

    entries.forEach((entry) => console.log(entry));
  } else {
    console.error(
      `FS operation failed: Source folder does not exist. Please add it from 'fs' folder and try again`
    );
    throwError();
  }
};

await list();
