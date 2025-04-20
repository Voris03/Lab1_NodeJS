import { parentPort } from 'worker_threads';

parentPort.on('message', (value) => {
  // Просто вернем квадрат числа
  try {
    const result = value * value;
    parentPort.postMessage({ status: 'resolved', data: result });
  } catch {
    parentPort.postMessage({ status: 'error', data: null });
  }
});