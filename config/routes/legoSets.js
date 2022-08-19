const openCors = require("../../app/middlewares/openCors");
const jsonResponse = require("../../app/middlewares/jsonResponse");

const { show, index } = require("../../app/controllers/legoSetsController");

const legoSets = (router) => {
  router.use([openCors, jsonResponse]);

  router.get("/", index);
  router.get("/:id", show);

  return router;
};

module.exports = legoSets;
