// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
var logSchema = new Schema({    
  userName: {
    type:Number,
    unique:true
    },
  passkey: {
  	type:String,
  	unique:true
  },
  description: {
    type:String,
    unique:true
  },
  duration: {
    type:Number,
    unique:true
  },
  date: {
    type:Date,
    unique:true
  }
});

// this will be our data base's data structure 
var userSchema = new Schema({    
  userName: {
    type:String,
    unique:true
    },
  passkey: {
  	type:String,
  	unique:true
  }
});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Logs", logSchema);
module.exports = mongoose.model("Users", userSchema);