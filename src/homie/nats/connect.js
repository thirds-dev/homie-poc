import { connect as natsConnect } from "nats";

let ncPromise;
let nc;

const connect = async () => {
  if (!ncPromise) {
    try {
      ncPromise = natsConnect({ servers: "nats:4222" });
    } catch (err) {
      console.log("error connecting to nats");
    }
  } else if (!nc) {
    nc = await ncPromise;
  }

  return nc;
};

export default connect;
