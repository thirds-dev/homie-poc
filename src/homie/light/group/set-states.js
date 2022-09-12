import api from "../api";
import list from "./list";

const setStates = async (states) => {
  const apiInstance = await api();
  const groups = await list();

  const result = await Promise.all(
    groups
      .filter((g) => !!states[g.name])
      .map((g) => apiInstance.groups.setGroupState(g.id, states[g.name]))
  );

  return result;
};

export default setStates;
