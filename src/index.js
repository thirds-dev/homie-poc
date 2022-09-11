process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import run from "./run.js";

(async () => {
  try {
    await run();
  } catch (err) {
    console.log(err);
    console.error(err.toString());
  }
})();
