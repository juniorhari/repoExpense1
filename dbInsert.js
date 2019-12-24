const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const dbSchema = require("./dbSchema");

module.exports.insertSingle = function(body){

  const Expense = mongoose.model("Expense", dbSchema.expenseSchema);
  var newExpense = new Expense({
      date: body.date,
      amount: body.amount,
      src: body.src,
      dest: body.dest,
      desc: body.desc,
      img: body.img
  });
  newExpense.save();
  console.log("Insert Done");

}
