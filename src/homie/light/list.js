import api from "./api"

const list = async () => {
    const apiInstance = await api();
    const lights = await apiInstance.lights.getAll();

    return lights;
}

export default list;
