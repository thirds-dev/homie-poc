import ChromecastApi from "chromecast-api";

const chromecast = () => {
  const chromecastApi = new ChromecastApi();
  const devices = chromecastApi.devices.filter(
    (d) => d.friendlyName === process.env.CHROMECAST_NAME
  );
  const device = devices.length ? devices[0] : null;

  return device;
};

export default chromecast;
