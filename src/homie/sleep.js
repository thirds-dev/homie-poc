const sleep = async ({ seconds }) =>
  new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });

export default sleep;
