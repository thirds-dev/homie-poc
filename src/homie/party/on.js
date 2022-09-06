import { play as playVideo } from "../video/play.js";
import { on as lightOn } from "../light/on.js";

export const on = async () =>
  Promise.all([
    lightOn(9),
    lightOn(6),
    lightOn(2),
    lightOn(3),
    lightOn(4),
    playVideo("Ig2D6xa_-IM"),
  ]);
