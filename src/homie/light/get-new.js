import api from "./api";

const getNew = async () => {
    const apiInstance = await api();
    const result = await apiInstance.lights.getNew();

    return result;
};

export default getNew;
