import axios from "axios";

const mode = ({ value }) =>
  axios({
    method: "PUT",
    url: `https://${process.env.PHILIPS_HUE_SYNC_IP}/api/v1/execution`,
    headers: {
      Authorization: `Bearer ${process.env.PHILIPS_HUE_SYNC_ACCESS_KEY}`,
    },
    data: {
      mode: value,
      toggleSyncActive: true,
    },
  });

export default mode;
