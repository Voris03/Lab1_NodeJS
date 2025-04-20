import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { join } from 'path';

const performCalculations = async () => {
  const threads = cpus().length;
  const workers = [];
  const results = new Array(threads);

  await Promise.all(
    Array.from({ length: threads }, (_, i) => {
      return new Promise((resolve) => {
        const worker = new Worker(join('src', 'wt', 'worker.js'));
        workers.push(worker);

        const value = 10 + i;

        worker.postMessage(value);

        worker.on('message', (msg) => {
          results[i] = msg;
          resolve();
        });

        worker.on('error', () => {
          results[i] = { status: 'error', data: null };
          resolve();
        });
      });
    })
  );

  console.log(results);
};

await performCalculations();