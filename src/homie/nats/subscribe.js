import { StringCodec } from "nats";

import connect from "./connect";

const sc = StringCodec();

const subscribe = async (topic, callback) => {
  const nc = await connect();
  const sub = nc.subscribe(topic);

  for await (const m of sub) {
    callback(sc.decode(m.data));
  }
};

export default subscribe;
