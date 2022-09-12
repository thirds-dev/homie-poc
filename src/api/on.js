import app from "./app";

const port = 3000;

const on = async () =>
  new Promise((resolve, reject) => {
    try {
      app().listen(port, resolve);
    } catch (err) {
      reject(err);
    }
  });

export default on;
