import light from "../light";

const activate = async ({ id }) => {
  const apiInstance = await light.api();
  const result = await apiInstance.scenes.activateScene(id);

  return result;
};

export default activate;
