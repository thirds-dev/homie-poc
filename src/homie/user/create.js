import light from "../light";

const create = async ({ appName, deviceName }) => {
    const api = await light.api();
    const result = api.users.createUser(appName, deviceName);

    return result;
};

export default create;
