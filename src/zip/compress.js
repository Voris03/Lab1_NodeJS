import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { join } from 'path';

const compress = async () => {
  const src = join('src', 'zip', 'files', 'fileToCompress.txt');
  const dest = join('src', 'zip', 'files', 'archive.gz');

  const readable = createReadStream(src);
  const writable = createWriteStream(dest);
  const gzip = createGzip();

  readable.pipe(gzip).pipe(writable);
};

await compress();