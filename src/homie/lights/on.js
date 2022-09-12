import light from "../light";

const on = async () => {
  await Promise.all([
    light.on({ id: 9 }),
    light.on({ id: 6 }),
    light.on({ id: 2 }),
    light.on({ id: 3 }),
    light.on({ id: 4 }),
  ]);

  await Promise.all([
    light.brightness({ id: 9, value: 100 }),
    light.brightness({ id: 6, value: 100 }),
    light.brightness({ id: 2, value: 100 }),
    light.brightness({ id: 3, value: 100 }),
    light.brightness({ id: 4, value: 100 }),
  ]);
};

export default on;
