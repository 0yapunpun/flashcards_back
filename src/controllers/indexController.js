const controller = {};

controller.index = (req, res, next) => {
  res.send({ success: true, message: "ok" });
};

module.exports = controller;
