import { v3 } from "node-hue-api";

import room from "../room";
import light from "../light";

const { LightState } = v3.lightStates;

const night = async () => {
  const rooms = await room.list();
  const livingRoom = rooms.find((r) => r.name === "Living Room");
  const patio = rooms.find((r) => r.name === "Patio");

  await Promise.all(
    livingRoom?.data.lights.map(async (id) =>
      light.state({ id, value: new LightState().on().brightness(30).rgb(0, 0, 255) })
    )
  );
  await Promise.all(patio?.data.lights.map(async (id) => light.off({ id })));
};

export default night;
