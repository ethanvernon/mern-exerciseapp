import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import {CreateUser} from './CreateUser';
import {CreateNewLog} from './CreateNewLog';
import {UrlDisplay} from './UrlDisplay';
import {FrameAndButton} from './FrameAndButton';
import {Ending} from './Ending';
import {Footer} from './Footer';
import {Title} from './Title';
import {Description} from './Description';
import {BodyHeader} from './BodyHeader';
import {SearchAPI} from './SearchAPI';
import {ResultPre} from './ResultPre';


export class Home extends Component {

	// initialize our state 

	constructor(props) {
		super(props);

		this.state = {
			shortenedUrl: null,
			userInput: null,
			logNameUserInput: null,
			logPasswordUserInput: null,
			logDescriptionUserInput: null,
			logDurationUserInput: null,
			logDateUserInput: null,
			searchResult: null,
			userHomeInput: null
		};

		this.putDataToDb = this.putDataToDb.bind(this);
		this.putLogToDb = this.putLogToDb.bind(this);
		this.formGetData = this.formGetData.bind(this);
		this.callback = this.callback.bind(this);
		this.callbackLog = this.callbackLog.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleLogFormChange = this.handleLogFormChange.bind(this);
		this.handleHomeFormChange = this.handleHomeFormChange.bind(this);
	}

	//console.log's the new document made by putDataToDB
	callback = (response) => {
		//console.log('response from post is: ' + response);
		//console.log(JSON.stringify(response));
		console.log(response.data);

		let newUserName= response.data.userName;

		
		//make sure popover for copying link is enabled
		this.setState({
			popoverHidden:false
		})
		

		//change state so that shortenedURL will display
		this.setState({
			shortenedUrl: newUserName,
			popoverOpen: false
		});
	}

	//when the form on the home page is submitted, this function sends a GET request
	//and then assigns the result to this.state.searchResult which is rendered
	//on home page by the component ResultPre.js
	formGetData() {
		//builds query from user input on home page
		var formQuery='/api/exercise/log/?' + this.state.userInput;


		axios.get(formQuery)
			.then(data => {
				//handle success
				//console.log('data returned looks like this: ' + data);
				//console.log("stringified that's like this: " + JSON.stringify(data));
				//data.json();
				this.setState({ searchResult: JSON.stringify(data.data, null, 2) });
			}).catch(err =>{
				//handle error
				console.log(err);
			});
	}

	// this takes the username from this.state.userInput and builds a new user
	//in the database
	putDataToDb() {

		var newUser = this.state.userInput;

		console.log('calling axios.post from react');

		axios.post("/api/exercise/new-user", {
			userName: newUser
		}).then(response => {
			console.log('sending response to console.log from react');
			this.callback(response);
		}).catch(err =>{
			console.log(err);
		});
	}

	// this takes input from various form data stored in relevant states and then
	// sends a post request to try and add the info as an exercise log
	putLogToDb() {

		console.log('calling axios.post from react');
		console.log('trying to add exercise log');

		axios.post("/api/exercise/add", {
			userName: this.state.logNameUserInput,
			passkey: this.state.logPasswordUserInput,
			description: this.state.logDescriptionUserInput,
			duration: this.state.logDurationUserInput,
			date: this.state.logDateUserInput
		}).then(response => {
			console.log('sending response to console.log from react');
			this.callbackLog(response);
		}).catch(err =>{
			console.log(err);
		});
	}

	// this is a simple callback console.log for testing purposes
	// it logs the response from a log attempt in putLogToDb()
	callbackLog(response) {
		console.log(response.data);
	}

	//whenever the home page form SearchAPI.js changes from user input, this function
	//updates this.state.userInput, which is then passed to the component
	handleFormChange(userInput) {
		this.setState({
			userInput: userInput
		});
	}

	//this function updates this.state.userHomeInput whenever the form in CreateUser.js
	//changes. the state is then passed to the component to update form text
	handleHomeFormChange(userInput) {
		this.setState({
			userHomeInput: userInput
		})
	}

	//this function updates various states whenever the forms in CreateNewLog.js
	//changes. the state is then passed to the component to update form texts
	handleLogFormChange(userInput, field) {
		switch(field) {
			case 'user':
				this.setState({
					logNameUserInput: userInput
				});
				break;
			case 'password':
				this.setState({
					logPasswordUserInput: userInput
				});
				break;
			case 'description':
				this.setState({
					logDescriptionUserInput: userInput
				});
				break;
			case 'duration':
				this.setState({
					logDurationUserInput: userInput
				});
				break;
			case 'date':
				this.setState({
					logDateUserInput: userInput
				});
				break;
			default:
				return null;
		}
	}

	render() {
		return(
			<div>
				<Title/>

				<Description/>

				<BodyHeader/>

				<SearchAPI
					handleChange={this.handleFormChange}
					handleClick={this.formGetData}
					userInput={this.state.userInput}/>

				<ResultPre
					searchResult={this.state.searchResult}
					handleFormChange={this.handleHomeFormChange}
					userInput={this.state.userHomeInput}
				/>

				{/*<CreateUser
					handleFormChange={this.handleFormChange}
					userInput={this.state.userInput}
					handleClick={this.putDataToDb}
				/>

				<CreateNewLog
					handleLogFormChange={this.handleLogFormChange}
					logNameUserInput={this.state.logNameUserInput}
					logPasswordUserInput={this.state.logPasswordUserInput}
					logDescriptionUserInput={this.state.logDescriptionUserInput}
					logDurationUserInput={this.state.logDurationUserInput}
					logDateUserInput={this.state.logDateUserInput}
					handleClick={this.putLogToDb}
				/>*/}

			</div>
		)
	}
}