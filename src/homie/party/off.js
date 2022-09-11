import light from "../light";

const off = async () =>
  Promise.all([
    light.off(9),
    light.off(6),
    light.off(2),
    light.off(3),
    light.off(4),
    light.sync.off(),
    video.play("Ig2D6xa_-IM"),
  ]);

export default off;
