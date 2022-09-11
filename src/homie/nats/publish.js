import { StringCodec } from "nats";

import connect from "./connect";

const sc = StringCodec();

const publish = async (topic, data) => {
    const nc = await connect();

    nc.publish(topic, sc.encode(data));
}

export default publish;
