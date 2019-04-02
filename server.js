
const bodyParser = require("body-parser");
const cors = require('cors');
const Users = require("./data");
const Logs = require("./logs");
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

	//check username and passkey match
	//check description length/type
	//check duration length/type
	//check date type
	//submit entry

	var user=req.body.userName;
	var password=req.body.passkey;
	var description=req.body.description;
	var duration=req.body.duration;
	var date=Date.parse(req.body.date);

	console.log('checking for user with id: ' + user + ' and passkey: ' + password);

	var checkUserAndPass=Users.findOne(
			{userName: user,
			passkey:password}
	).then(function(data) {
		if (!data) {
			return res.send({error: 'invalid username/password combination'});
		}
		
		console.log('username and password checks out');

		var newExerciseEntry = new Logs({
			userName:user,
			description: description,
			duration: duration,
			date: date
		});

		console.log('created new Logs document');

		newExerciseEntry.save((err, response) => {
			if (err) {
				return res.json({success:false, error:err});
			}
			return res.send(response);
		})
	});	
});

//get request for user's exercise logs
app.get('/api/exercise/log', (req, res) => {
	
	//store route parameters
	//http://localhost:3001/api/exercise/log?username=ethan&from=2011-01-01&to=2017-01-01&limit=2
	//validate user and passkey
	//user parameters to filter results
	//change dates to ISO string: new Date(year,month,day,0,0,0).toISOString();
	//return results

	var user=req.query.username;
	var password=req.query.passkey;
	var fromDate=(req.query.from) ? Date.parse(req.query.from) : null;
	var toDate=(req.query.to) ? Date.parse(req.query.to) : null;
	var limit=parseInt(req.query.limit);

	var query = Logs.find();

	if (fromDate) {
		query=query.where('date').gt(fromDate);
	}
	if (toDate) {
		query=query.where('date').lt(toDate);
	}

	query=query.where('userName').equals(user);
	query=query.limit(limit);
	query=query.select({date:1, description:1, duration:1, _id:0});

	query.exec((err, data) => {
		if (err) throw err;	
		//var dataResponse=JSON.parse(data);
		res.json(data);
	});

/*
	Logs.
		find({
			userName: user
			//date: { $gt: fromDate, $lt: toDate }
		}).
		limit(limit).
		select({date:1, description:1, duration:1}).
		exec((err, data) => {
			if (err) {
				return res.json({ success: false, error: err });
			}
			return res.send(data);
		});

		*/
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