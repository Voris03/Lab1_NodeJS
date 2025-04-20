import { createWriteStream } from 'fs';
import { join } from 'path';

const write = async () => {
  const filePath = join('src', 'streams', 'files', 'fileToWrite.txt');
  const stream = createWriteStream(filePath);

  process.stdin.pipe(stream);
};

await write();