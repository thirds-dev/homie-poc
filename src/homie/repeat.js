const repeat = async ({ count }, callback) => {
  for (let i = 0; i < count; i++) {
    await callback();
  }
};

export default repeat;
