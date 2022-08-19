const { client } = require("../../config/db");

module.exports.show = async (req, res) => {
  const legoSet = await _getByID(req.query.id);

  res.json(legoSet);
};

module.exports.index = (_req, res) => {
  res.json({ foo: "index" });
};

const _getByID = async (id) => {
  return await client()
    .db("cs_341_projects")
    .collection("lego_sets")
    .findOne({ id: id });
};
