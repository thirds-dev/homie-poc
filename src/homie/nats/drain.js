import connect from "./connect";

const drain = async () => {
  const nc = await connect();
  await nc.drain();
};

export default drain;
