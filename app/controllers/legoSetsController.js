const { database } = require("../../config/db");

module.exports.show = async (req, res) => {
  const legoSet = await _getByID(req.query.id);

  res.json(legoSet);
};

module.exports.index = async (_req, res) => {
  const allLegoSets = await _getAll();
  res.json(allLegoSets);
};

const _getByID = async (id) => {
  return await database().collection("lego_sets").findOne({ id: id });
};

const _getAll = async () => {
  return await database().collection("lego_sets").find({}).toArray();
};
