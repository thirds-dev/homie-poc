import { discovery, api as hueApi } from "node-hue-api";

export const api = async () =>
  discovery
    .nupnpSearch()
    .then((results) =>
      hueApi
        .createLocal(results?.[0].ipaddress)
        .connect(process.env.PHILIPS_HUE_USERNAME)
    );
