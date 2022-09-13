import teslajs from "teslajs";

import login from "../login";

const on = async () => {
  const authToken = await login();
  await new Promise((resolve, reject) => {
    teslajs.climateStart(
      {
        authToken,
      },
      (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      }
    );
  });
};

export default on;
