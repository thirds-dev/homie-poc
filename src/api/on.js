import server from "./server";

const port = 4000;

const on = async () =>
  new Promise((resolve, reject) => {
    try {
      server.listen(port, resolve);
    } catch (err) {
      reject(err);
    }
  });

export default on;
