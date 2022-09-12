import light from "../light";

const list = async () => {
    const apiInstance = await light.api();
    const result = apiInstance.groups.getRooms();

    return result;
};

export default list;
