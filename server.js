
const bodyParser = require("body-parser");
const cors = require('cors');
const Links = require("./data");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = express.Router();

require('dotenv').config();

const app = express();
const API_PORT = process.env.PORT || 3001;


//other imports
const path = require('path');

//other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors());
// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this is our MongoDB database
const dbRoute = process.env.MONGO_URI;

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));





//post request from form in for new user Home.js
app.post('/api/exercise/new-user', function(req,res) {

	//check validity of username
	//if invalid, return err
	//check if userName exists
	//return err if it does
	//add userName to database
	//return unique user key

	var newUser=req.body.userName;

	if (newUser.length > 15) {
		res.send({error: 'username too long'});
	}

	var findExistingUser=Users.findOne(
		{userName: newUser}
	).then(function(data) {
		if (data) {
			return res.send({error: "username taken"});
		}
		let randomKey=generate()+generate()+generate();
		var newUserToAdd = new Users({
			userName: newUser,
			passkey: randomKey
		});

		newUserToAdd.save((err, response) => {
        if (err) {
			console.log("error to databse: " + err);
			return res.json({ success: false, error: err });
        }
        console.log('success, response is: ' + response);
        return res.send(response);
      });
	});
});

//post request from form for new exercise entry
app.post('/api/exercise/add', function(req, res) {
	var user=req.body.userName;
	var password=req.body.passkey;
	var description=req.body.description;
	var duration=req.body.duration;
	var date=req.body.date;

	var checkUserAndPass=Users.findOne(
			{userName: user,
			passkey:password}
	).then(function(data) {
		if (!data) {
			return res.send({error: 'invalid username/password combination'});
		}
		
		var newExerciseEntry = new Logs({
			userId:user,
			passkey:password,
			description: description,
			duration: duration,
			date: date
		});

		newExerciseEntry.save((err, response) => {
			if (err) {
				return res.json({success:false, error:err});
			}
			return res.send(response);
		})
	})
});

	//check username and passkey match
	//check description length/type
	//check duration length/type
	//check date type
	//submit entry
});

//get request for user's exercise logs
app.get('/api/exercise/log'), function(req, res) {
	//store route parameters
	//log?userid=<user>&passkey=<passkey>&from=<from>&to=<to>&limit=<limit>
	//var userId=req.query.userid
	//validate user and passkey
	//user parameters to filter results
	//change dates to ISO string: new Date(year,month,day,0,0,0).toISOString();
	//return results
}


//get request to update number of links made in database
app.get("/getData", (req, res) => {
  console.log('checking database for data');
  Links.find((err, data) => {
    if (err) {
      console.log('error checking databse for data');
      return res.json({ success: false, error: err });
    }
    //console.log('no error checking database. returning data: ' + JSON.stringify(data));
    console.log(data.length);
    //return res.send(data);
  })
  .select({ _id: 1})
  .exec((err, data) => {
  	console.log('return data as :' + data);
  	return res.send(data);
  });
});





// Get input from client - Route parameters 
app.get('/:shortened', function(req, res, next) {
      //check the database for the shortened url
      var findOneByFood = Links.findOne({short_url:parseInt(req.params.shortened)})
      .then(function (data) {
        if(!data) {
          console.log('got an error: ' + data);
          return null;
        } else {
          console.log('got some data: ' + JSON.stringify(data));
          res.redirect(data.original_url);
        }
      });
});


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));


//generates string of random letter a-z of string_length
function generate_random_string(string_length){
    let random_string = '';
    let random_ascii;
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * 25) + 97);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}

//generates random number 1-9
function generate_random_number(){
    let num_low = 1;
    let num_high = 9;
    return Math.floor((Math.random() * (num_high - num_low)) + num_low);
}

//generates random string between 1-3 letters and random number (credit: https://codehandbook.org/generate-random-string-characters-in-javascript/ )
function generate() {
    return generate_random_string(Math.floor((Math.random()*3)+1)) + generate_random_number()
}