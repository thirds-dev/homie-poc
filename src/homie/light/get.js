const get = async ({ id }) => {
    const apiInstance = await api();
    const result = await apiInstance.lights.getLightAttributesAndState(id);

    return result;
};

export default get;
