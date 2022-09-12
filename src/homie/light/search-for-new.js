import api from "./api";

const searchForNew = async () => {
    const apiInstance = await api();
    const result = await apiInstance.lights.searchForNew();

    return result;
};

export default searchForNew;
