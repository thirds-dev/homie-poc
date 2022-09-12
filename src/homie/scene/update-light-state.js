import light from "../light";

const updateLightState = async ({ id, lightId, state }) => {
    const apiInstance = await light.api();
    const result = await apiInstance.scenes.updateLightState(id, lightId, state);

    return result;
}

export default updateLightState;
