const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const dbConnect = require("./dbConnect");
const dbInsert = require("./dbInsert");
const dbSchema = require("./dbSchema");
const dbGet = require("./dbGet");

app.get("/", function(req, res) {
  res.render("view1", {});
});

app.get("/view1", function(req, res) {
  res.render("view1", {});
});

app.get("/view2", function(req, res) {
  res.render("view2", {
    retArr: []
  });
});

app.post("/getAll", function(req, res) {

  dbConnect.connectDB;
  const Expense = mongoose.model("Expense", dbSchema.expenseSchema);
  Expense.find(function(err, Expenses) {
    res.render("view2", {
      retArr: Expenses
    });
    dbConnect.disconnectDB;
  });

});

app.post("/insert", function(req, res) {
  if (req.body.date != '' && req.body.amount != '' && req.body.src != '') {
    //console.log(req.body);
    dbConnect.connectDB;
    var dataRecord = req.body;
    dbInsert.insertSingle(dataRecord);
    dbConnect.disconnectDB;
    res.redirect("/");
  }
  else{
    console.log("No Insert Done");
    res.redirect("/");
  }
});

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on port 3000");
});
