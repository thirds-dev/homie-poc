import { discovery, api as hueApi } from "node-hue-api";

let _api;

const api = async () => {
  if (!_api) {
    _api = discovery
      .nupnpSearch()
      .then((results) =>
        hueApi
          .createLocal(results[0].ipaddress)
          .connect(process.env.PHILIPS_HUE_USERNAME)
      );
  }

  return _api;
};

export default api;
