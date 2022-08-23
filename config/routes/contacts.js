const openCors = require("../../app/middlewares/openCors");
const jsonResponse = require("../../app/middlewares/jsonResponse");

const { show } = require("../../app/controllers/contacts");

const contacts = (router) => {
  router.use([openCors, jsonResponse]);

  router.get("/:id", show);

  return router;
};

module.exports = contacts;
