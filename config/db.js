require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

let _client;

const password = process.env.DB_PASSWORD;
const uri = `mongodb+srv://westonkd:${password}@cluster0.vnxduoo.mongodb.net/?retryWrites=true&w=majority`;

const initDB = async () => {
  if (_client) return _client;

  console.log("Connecting to DB");

  try {
    _client = await MongoClient.connect(uri);
    console.log("DB connection established");
  } catch (error) {
    throw Error(`DB Connection error: ${error}`);
  }
};

const client = () => {
  if (!_client) throw Error("No DB connection initialize. Please call init()");

  return _client;
};

module.exports = {
  initDB,
  client,
};
