import api from "./api";

const remove = async ({ id }) => {
    const apiInstance = await api();
    const result = await apiInstance.lights.deleteLight(id);

    return result;
};

export default remove;
