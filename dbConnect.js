const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

var dbName = "expAppV1";
var locuri = "mongodb://localhost/" + dbName;
var uri = "mongodb+srv://cluster0-ou0wn.mongodb.net/test";
var options = {
  useNewUrlParser: true,
  user: "junior_hari1",
  pass: "okpass12345"
};

module.exports.connectDB = mongoose.connect(uri, options, function(err){
  if(err){
    console.log("dbConnect ERROR!");
  }
  else{
    console.log("dbConnect Success");
  }
});

module.exports.disconnectDB = function() {
  mongoose.connection.close();
  console.log("db dis-Connect Success");
}
