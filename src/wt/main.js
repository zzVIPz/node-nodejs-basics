import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { join } from 'path';

const performCalculations = async () => {
  const sourceFile = join(import.meta.dirname, 'worker.js');
  let startingNumber = 10;

  const data = await Promise.all(
    cpus().map(
      () =>
        new Promise((res) => {
          const worker = new Worker(sourceFile, {
            workerData: startingNumber++,
          });

          worker.on('message', (message) =>
            res({
              status: 'resolved',
              data: message,
            })
          );

          worker.on('error', () =>
            rej({
              status: 'rejected',
              data: null,
            })
          );
        })
    )
  );

  console.log(data);
};

await performCalculations();
