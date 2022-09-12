import api from "../api";

const list = async () => {
    const apiInstance = await api();
    const result = apiInstance.groups.getAll();

    return result;
}

export default list;
