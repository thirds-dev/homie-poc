import teslajs from "teslajs";

const login = (async) =>
  new Promise((resolve, reject) => {
    teslajs.login(
      {
        username: process.env.TESLA_USERNAME,
        password: process.env.TESLA_PASSWORD,
      },
      function (err, result) {
        if (err) {
          reject(err);
        }
        if (result.error) {
          reject(result.error);
        }

        let token = JSON.stringify(result.authToken);

        if (token) {
          resolve(token);
        } else {
          reject();
        }
      }
    );
  });

  export default login;
