const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

module.exports.expenseSchema = new mongoose.Schema({
    date: String,
    amount: Number,
    src: String,
    dest: String,
    desc: String,
    img: String
});
