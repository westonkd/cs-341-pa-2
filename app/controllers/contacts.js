const { database } = require("../../config/db");

module.exports.show = async (req, res) => {
  const contact = await _getByID(req.query.id);

  res.json(contact);
};

const _getByID = async (id) => {
  return await database().collection("contacts").findOne({ id: id });
};
