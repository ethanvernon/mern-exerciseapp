// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*// this will be our data base's data structure 
var logSchema = new Schema({    
  userName: {
    type:Number,
    required: true,
    unique:true
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
});*/

// this will be our data base's data structure 
var userSchema = new Schema({    
  userName: {
    type:String,
    required: true,
    unique:true
    },
  passkey: {
  	type:String,
    required: true,
  	unique:true
  }
});

// export the new Schema so we could modify it using Node.js
//module.exports = mongoose.model("Logs", logSchema);
module.exports = mongoose.model("Users", userSchema);