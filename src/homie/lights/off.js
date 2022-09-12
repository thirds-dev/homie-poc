import light from "../light";

const off = async () => {
  await Promise.all([
    light.off({ id: 9 }),
    light.off({ id: 6 }),
    light.off({ id: 2 }),
    light.off({ id: 3 }),
    light.off({ id: 4 })
  ]);  
};

export default off;
