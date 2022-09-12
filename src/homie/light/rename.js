import api from "./api";

const rename = async ({ id, name }) => {
    const apiInstance = await api();
    const result = await apiInstance.lights.renameLight({ id, name });

    return result;
}

export default rename;
