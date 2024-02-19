const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({

   
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
    },
    date : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    }
    

})

const Attendance = mongoose.model("Attendance",attendanceSchema);

module.exports = Attendance;