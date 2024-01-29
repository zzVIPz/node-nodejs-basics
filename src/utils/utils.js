import { access, constants } from 'fs/promises';

export const throwError = () => {
  throw new Error(`FS operation failed`);
};

export const isSourceExist = async (source, mode = constants.F_OK) => {
  try {
    await access(source, mode);
    return true;
  } catch (e) {
    return false;
  }
};
