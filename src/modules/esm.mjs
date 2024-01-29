import { readFile } from 'fs/promises';
import path from 'path';
import { release, version } from 'os';
import { createServer } from 'http';
import './files/c.js';

const sourceFile = path.join(
  import.meta.dirname,
  'files',
  `${Math.random() > 0.5 ? 'a' : 'b'}.json`
);
const unknownObject = JSON.parse(await readFile(sourceFile, 'utf-8'));

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const myServer = createServer((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };