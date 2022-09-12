import api from "../api";

const update = async (group) => {
    const apiInstance = await api();
    const result = apiInstance.groups.updateGroupAttributes(group);

    return result;
}

export default update;
