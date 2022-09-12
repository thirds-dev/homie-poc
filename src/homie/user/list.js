import light from "../light";

const list = async () => {
    const api = await light.api();
    const users = api.users.getAll();

    return users;
};

export default list;
