import light from "../light";

const create = async (scene) => {
    const apiInstance = await light.api();
    const result = await apiInstance.scenes.createScene(scene);

    return result;
}

export default create;
