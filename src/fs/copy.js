import { mkdir, readdir, copyFile } from 'fs/promises';
import { join } from 'path';
import { throwError, isSourceExist } from '../utils/utils.js';

const copy = async () => {
  const sourceFolder = join(import.meta.dirname, 'files');
  const destinationFolder = join(import.meta.dirname, 'files_copy');

  if (await isSourceExist(destinationFolder)) {
    console.error(
      `FS operation failed: Destination folder already exists. Please delete it from 'fs' folder and try again`
    );
    throwError();
  }

  if (await isSourceExist(sourceFolder)) {
    try {
      await mkdir(destinationFolder);

      const entries = await readdir(sourceFolder, {
        withFileTypes: true,
      });

      for (const entry of entries) {
        const sourceFile = join(sourceFolder, entry.name);
        const destinationFile = join(destinationFolder, entry.name);

        await copyFile(sourceFile, destinationFile);
      }
      console.log(`Copy is done successfully!`);
    } catch (e) {
      console.error(`Copy failed`);
      throwError();
    }
  } else {
    console.error(
      `FS operation failed: Source does not exist. Please add it to 'fs' folder and try again`
    );
    throwError();
  }
};

await copy();
