import api from "../api";

const get = async ({ id }) => {
    const apiInstance = await api();
    const result = apiInstance.groups.getGroup({ id });

    return result;
}

export default get;