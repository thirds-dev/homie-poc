import { v3 } from "node-hue-api";

import room from "../room";
import light from "../light";

const { GroupLightState } = v3.lightStates;

const states = {
  "Living Room": new GroupLightState().on().brightness(100).scene('Day'),
};

const morning = async () => {
  const rooms = await room.list();

  await Promise.all(rooms.map(async (room) => {
    const { id, name } = room;
    const value = states[name];

    if (value) {
      await light.group.setState({ id, value });
    }
  }));
};

export default morning;
