import api from "../api";

const create = async (group) => {
    const apiInstance = await api();
    const result = apiInstance.groups.createGroup(group);

    return result;
}

export default create;
