import { StringCodec } from "nats";

import homie from "../homie";
import connect from "./connect";

const sc = StringCodec();

const subscribe = async (topic) => {
  const nc = await connect();
  const sub = nc.subscribe(topic);

  for await (const m of sub) {
    try {
      const path = m.topic.split(".");
      const method = path.reduce(
        (prev, cur) => (cur && prev[cur] ? prev[cur] : prev),
        homie
      );
      await method(sc.decode(m.data));
    } catch (err) {
      console.log(err);
    }
  }
};

export default subscribe;
