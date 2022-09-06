import { run } from "./homie/index.js";

let isInterrupted = false;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.on("SIGINT", function () {
  isInterrupted = true;
});

(async () => {
  try {
    await run();
  } catch (err) {
    console.log(err);
    console.error(err.toString());
  }
})();
