import fs from "fs";
import path from "path";

import { file as playFile } from "./file";

const random = async ({ path: folderPath }) =>
  new Promise((resolve, reject) => {
    try {
      const absoluteFolderPath = path.join(process.cwd(), 'music', folderPath);

      fs.readdir(absoluteFolderPath, async (err, files) => {
        if (err) {
          reject(err);
          return;
        }

        try {
          const index = Math.round(Math.random() * (files.length - 1));
          const absolutePath = path.join(folderPath, files[index]);

          await playFile({ path: absolutePath });

          resolve();
        } catch (err) {
          reject(err);
        }
      });
    } catch (err) {
      reject(err);
    }
  });

export default random;
