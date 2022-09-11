import video from "../video";
import light from "../light";

const on = async () =>
  Promise.all([
    light.on(9),
    light.on(6),
    light.on(2),
    light.on(3),
    light.on(4),
    video.play("Ig2D6xa_-IM"),
  ]);

export default on;
