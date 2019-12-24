const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const dbSchema = require("./dbSchema");
const dbConnect = require("./dbConnect");

module.exports.getAll =  function() {
  console.log("Success on exepense");
  const Expense = mongoose.model("Expense", dbSchema.expenseSchema);
  Expense.find({
    lean: true
  }, function(err, Expenses) {
    if (err) {
      return "Error";
    } else {
      console.log("Success on exepense");
      return Expenses;
    }
  });
}
