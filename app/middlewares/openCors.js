const cors = require("cors");

module.exports = (req, res, next) => {
  const openCors = { origin: "*" };

  return cors(openCors)(req, res, next);
};
