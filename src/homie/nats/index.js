import connect from "./connect";
import drain from "./drain";
import publish from "./publish";
import subscribe from "./subscribe";

const nats = {
  connect,
  drain,
  publish,
  subscribe,
};

export default nats;
