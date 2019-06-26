# NASA Meteorite Landing Web Service

### Summary
This project uses Mongoose, MongoDB, Express, Node, HTML, CSS, Bootstrap, React Router, and React.js. It lets users access and save exercise logs via API or the website. It is available here: https://mernlog.herokuapp.com/

### Sign Up Form
Users can sign up for a user ID.
![React Logo w/ Text](http://fromgaming.com/images/mernlog-signup-min.png)
```
	// this takes the username from this.state.userInput and builds a new user
	//in the database
	putUserToDb() {

		var newUser = this.state.newUserInput;

		console.log('calling axios.post from react');
		console.log('adding new user to database');

		axios.post("/api/new-user", {
			userName: newUser
		}).then(response => {
			console.log('storing result in state');
			this.setState({
				searchResult: JSON.stringify(response.data, null, 2)
			});
		}).catch(err =>{
			console.log(err);
		});
	}
```
### Post exercise form
Posts an exercise to the database. Uses axios.
![React Logo w/ Text](http://fromgaming.com/images/mernlog-post-min.png)

### Get request form
Lets users search for exercise logs
![React Logo w/ Text](http://fromgaming.com/images/mernlog-query-min.png)

### Navbar
Made modifying Bootstrap styles in CSS
![React Logo w/ Text](http://fromgaming.com/images/mernlog-navbar-min.png)

### Responsive design
![React Logo w/ Text](http://fromgaming.com/portfolio2/static/media/exerciselog-markup.f4f27773.png)

### Restful API
API built with Express, Mongoose, MongoDB, and Node
```
app.post("/api/add", function(req, res) {

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

	console.log("checking for user with id: " + user + " and passkey: " + password);

	var checkUserAndPass=Users.findOne(
			{userName: user,
			passkey:password}
	).then(function(data) {
		if (!data) {
			return res.send({error: "invalid username/password combination"});
		}
		
		console.log("username and password checks out");

		var newExerciseEntry = new Logs({
			userName:user,
			description: description,
			duration: duration,
			date: date
		});

		console.log("created new Logs document");

		newExerciseEntry.save((err, response) => {
			if (err) {
				return res.json({success:false, error:err});
			}
			return res.send(response);
		})
	});	
});
```
