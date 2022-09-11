import fs from "fs";
import path from "path";

import { file as playFile } from "./file";

const random = async (folderPath) =>
  new Promise((resolve, reject) => {
    try {
      fs.readdir(folderPath, async (err, files) => {
        if (err) {
          reject(err);
          return;
        }

        try {
          const index = Math.round(Math.random() * (files.length - 1));

          await playFile(path.join(folderPath, files[index]));

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
