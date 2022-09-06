import axios from "axios";

export const mode = (newMode = undefined) =>
  axios(
    newMode
      ? {
          method: "PUT",
          url: `https://${process.env.PHILIPS_HUE_SYNC_IP}/api/v1/execution`,
          headers: {
            Authorization: `Bearer ${process.env.PHILIPS_HUE_SYNC_ACCESS_KEY}`,
          },
          data: {
            mode: newMode,
            toggleSyncActive: true,
          },
        }
      : {
          method: "GET",
          url: `https://${process.env.PHILIPS_HUE_SYNC_IP}/api/v1/execution`,
          headers: {
            Authorization: `Bearer ${process.env.PHILIPS_HUE_SYNC_ACCESS_KEY}`,
          },
        }
  );
