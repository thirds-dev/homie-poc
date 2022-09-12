import light from "../light";

const list = async () => {
    const api = await light.api();
    const scenes = await api.scenes.getAll();

    return scenes;
};

export default list;
