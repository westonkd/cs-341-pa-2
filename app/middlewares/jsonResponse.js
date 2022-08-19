module.exports = (_req, res, next) => {
  res.set("Content-Type", "application/json");
  next();
};
