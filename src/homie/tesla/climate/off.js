const off = async () => {
  const authToken = await login();
  await new Promise((resolve, reject) => {
    teslajs.climateStop(
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

export default off;
