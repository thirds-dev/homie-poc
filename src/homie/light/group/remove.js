import api from "../api";

const remove = async ({ id }) => {
    const apiInstance = await api();
    const result = apiInstance.groups.deleteGroup(id);

    return result;
}

export default remove;
