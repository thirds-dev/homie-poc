import api from "../api";
import list from "./list";

const setStates = async (states) => {
  const [apiInstance, groupList ] = await Promise.all([
    api(),
    list(),
  ]);

  const statesByGroupId = groupList.filter((g) => !!states[g.name])
    .reduce((o, g) => { o[g.id] = states[g.name]; return o; }, {});

  const result = await Promise.all(
    Object.entries(statesByGroupId).map(async ([groupId, state]) =>
      apiInstance.groups.setGroupState(groupId, state)
    )
  );

  return result;
};

export default setStates;
