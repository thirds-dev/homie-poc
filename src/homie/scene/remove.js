import light from "../light";

const remove = async ({ id }) => {
    const apiInstance = await light.api();
    const result = await apiInstance.scenes.deleteScene(id);

    return result;
}

export default remove;
