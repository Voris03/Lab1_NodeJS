import { promises as fs } from 'fs';
import { join } from 'path';

const copy = async () => {
  const srcDir = join('src', 'fs', 'files');
  const destDir = join('src', 'fs', 'files_copy');

  try {
    await fs.access(srcDir);

    try {
      await fs.access(destDir);
      throw new Error('FS operation failed');
    } catch (err) {
      if (err.code !== 'ENOENT') throw new Error('FS operation failed');
    }

    await fs.cp(srcDir, destDir, { recursive: true });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();