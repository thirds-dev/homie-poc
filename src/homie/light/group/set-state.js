import api from "../api";

const setState = async ({ id, state }) => {
    const apiInstance = await api();
    const result = apiInstance.groups.setGroupState(id, state);

    return result;
}

export default setState;