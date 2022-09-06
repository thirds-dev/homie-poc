import { off as lightOff } from "../light/off.js";

export const off = async () =>
  Promise.all([
    lightOff(9),
    lightOff(6),
    lightOff(2),
    lightOff(3),
    lightOff(4),
  ]);
