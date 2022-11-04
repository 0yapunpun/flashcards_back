const mongoose = require("mongoose");
const config = require("./config");
const db = {};

db.connect = async () => {
  try {
    await mongoose.connect(config.db);
    console.log("Success connection to DB");
  } catch (err) {
    console.log("Failed connection to DB  \n", err);
  }
};

module.exports = db;
