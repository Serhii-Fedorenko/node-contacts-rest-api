function ctrlWrapper(ctrl) {
  async function func(req, res, next) {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  return func;
}

module.exports = ctrlWrapper;
