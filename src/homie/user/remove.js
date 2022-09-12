import light from "../light";

const remove = async ({ appName }) => {
    const api = await light.api();
    const result = api.users.deleteUser(appName);
    
    return result;
};

export default remove;
