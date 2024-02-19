const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    name : {
        type : String,
        required : true  //backend validation
    },
    lname : {
        type : String,
        required : true  //backend validation
    },
    age : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    contact : {
        type : Number,
        required : true
    },
    job : {
        type : String,
        required : true
    }
    

})

const Employee = mongoose.model("Employee",employeeSchema);

module.exports = Employee;