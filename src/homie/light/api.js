import { discovery, api as hueApi } from "node-hue-api";

let apiInstance = null;

const api = async () => {
  if (!apiInstance) {
    apiInstance = discovery
      .nupnpSearch()
      .then((results) =>
        hueApi
          .createLocal(results[0].ipaddress)
          .connect(process.env.PHILIPS_HUE_USERNAME)
      );
  }

  return apiInstance;
};

export default api;
