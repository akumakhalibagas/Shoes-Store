const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb://makhalibagas:admin123@cluster0-shard-00-00.hweru.mongodb.net:27017,cluster0-shard-00-01.hweru.mongodb.net:27017,cluster0-shard-00-02.hweru.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-l9rqvj-shard-0&authSource=admin&retryWrites=true&w=majority",
    { useUnifiedTopology: true }
  )
    .then((client) => {
      console.log("Connected to MongoDB");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};

module.exports = {
  mongoConnect,
  getDb,
};
