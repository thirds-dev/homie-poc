import api from "../api";
import list from "./list";

const setStates = async (states) => {
  const [apiInstance, groupList] = await Promise.all([api(), list()]);

  const hasState = (group) => !!states[group.name];
  const buildState = (obj, group) => {
    obj[group.id] = states[group.name];

    return obj;
  };
  const statesByGroupId = groupList.filter(hasState).reduce(buildState, {});

  const setGroupState = async ([groupId, state]) =>
    apiInstance.groups.setGroupState(groupId, state);
  const result = await Promise.all(
    Object.entries(statesByGroupId).map(setGroupState)
  );

  return result;
};

export default setStates;
