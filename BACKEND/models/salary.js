const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salarySchema = new Schema({
  ename: {
    type: String,
    required: true
  },
  elname: {
    type: String,
    required: true,
    unique: true
  },
  basic: {
    type: Number,
    required: true,
    default: 0
  },
  bonus: {
    type: Number,
    required: true,
    default: 0
  },
  ded: {
    type: Number,
    required: true,
    default: 0
  },
  net: {
    type: Number,
    required: true,
    default: 0
  },
  // ...
});

const Salary = mongoose.model("Salary", salarySchema);

module.exports = Salary;
