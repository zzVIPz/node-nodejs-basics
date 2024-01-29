import { Transform } from 'stream';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(data, _, callback) {
      callback(null, data.toString().split('').reverse().join('') + '\n');
    },
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
