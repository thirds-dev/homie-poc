import light from "../light";

const update = async (scene) => {
    const apiInstance = await light.api();
    const result = await apiInstance.scenes.updateScene(scene);

    return result;
}

export default update;
