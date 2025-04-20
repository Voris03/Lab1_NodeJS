import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { join } from 'path';

const decompress = async () => {
  const src = join('src', 'zip', 'files', 'archive.gz');
  const dest = join('src', 'zip', 'files', 'fileToCompress.txt');

  const readable = createReadStream(src);
  const writable = createWriteStream(dest);
  const gunzip = createGunzip();

  readable.pipe(gunzip).pipe(writable);
};

await decompress();