import { run } from "./homie/index.js";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

(async () => {
  try {
    await run();
  } catch (err) {
    console.log(err);
    console.error(err.toString());
  }
})();
