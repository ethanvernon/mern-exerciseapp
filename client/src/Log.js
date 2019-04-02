import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LogTitle} from './LogTitle';
import {CreateNewLog} from './CreateNewLog';
import {LogDescription} from './LogDescription';
import {ResultPre} from './ResultPre';
import './App.css';
import axios from "axios";


export class Log extends Component {

	constructor(props) {
		super(props);

		this.state = {
			logNameUserInput: null,
			logPasskeyUserInput: null,
			logDescriptionUserInput: null,
			logDurationUserInput: null,
			logDateUserInput: null,
			logResult:null
		};

		this.handleLogFormChange = this.handleLogFormChange.bind(this);
		this.putLogToDb = this.putLogToDb.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0,0);
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
			case 'passkey':
				this.setState({
					logPasskeyUserInput: userInput
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

	// this takes input from various form data stored in relevant states and then
	// sends a post request to try and add the info as an exercise log
	putLogToDb() {

		console.log('calling axios.post from react');
		console.log('trying to add exercise log');

		axios.post("/api/add", {
			userName: this.state.logNameUserInput,
			passkey: this.state.logPasskeyUserInput,
			description: this.state.logDescriptionUserInput,
			duration: this.state.logDurationUserInput,
			date: this.state.logDateUserInput
		}).then(response => {
			console.log('sending response to console.log from react');
			console.log(response.data)			
			this.setState({
				logResult: JSON.stringify(response.data, null, 2)
			});;
		}).catch(err =>{
			console.log(err);
		});
	}

	render() {
		return (
		<div className='signup'>
				<LogTitle/>

				<LogDescription/>

				<CreateNewLog
					handleLogFormChange={this.handleLogFormChange}
					logNameUserInput={this.state.logNameUserInput}
					logPasskeyUserInput={this.state.logPasskeyUserInput}
					logDescriptionUserInput={this.state.logDescriptionUserInput}
					logDurationUserInput={this.state.logDurationUserInput}
					logDateUserInput={this.state.logDateUserInput}
					handleClick={this.putLogToDb}
				/>

				<ResultPre
					searchResult={this.state.logResult}
				/>

		</div>
	    );
  }
}