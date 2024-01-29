import { rename as fs_rename } from 'fs/promises';
import { join } from 'path';
import { throwError, isSourceExist } from '../utils/utils.js';

const rename = async () => {
  const sourceFile = join(import.meta.dirname, 'files', 'wrongFilename.txt');
  const destinationFile = join(
    import.meta.dirname,
    'files',
    'properFilename.md'
  );
  const isSourceFileExists = await isSourceExist(sourceFile);

  if (!isSourceFileExists) {
    console.error(`FS operation failed: wrongFilename.txt does not exists`);
    throwError();
  }

  if (await isSourceExist(destinationFile)) {
    console.error(`FS operation failed: properFilename.md already exists`);
    throwError();
  } else {
    await fs_rename(sourceFile, destinationFile);
    console.log(`File successfully renamed!`);
  }
};

await rename();
