import fs from "fs";
import path from "path";

import { play } from "./play.js";

export const random = async (folderPath) => {
  const files = fs.readdirSync(folderPath);
  const index = Math.round(Math.random() * (files.length - 1));

  await play(path.join(folderPath, files[index]));
};
