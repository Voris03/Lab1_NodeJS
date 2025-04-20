import { createReadStream } from 'fs';
import { join } from 'path';

const read = async () => {
  const filePath = join('src', 'streams', 'files', 'fileToRead.txt');
  const stream = createReadStream(filePath, 'utf-8');

  stream.pipe(process.stdout);
};

await read();