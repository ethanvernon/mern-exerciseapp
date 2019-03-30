// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
var logSchema = new Schema({    
  userName: {
    type:String,
    required: true
    },
  description: {
    type:String,
    required: true
  },
  duration: {
    type:Number,
    required: true
  },
  date: {
    type:Date
  }
});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Logs", logSchema);