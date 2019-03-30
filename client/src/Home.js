import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import {CreateUser} from './CreateUser';
import {CreateNewLog} from './CreateNewLog';
import {UrlDisplay} from './UrlDisplay';
import {Description} from './Description';
import {FrameAndButton} from './FrameAndButton';
import {Ending} from './Ending';
import {Footer} from './Footer';

export class Home extends Component {

	// initialize our state 

	constructor(props) {
		super(props);

		this.state = {
			data: [],
			shortenedUrl: null,
			popoverOpen: false,
			popoverHidden: false,
			linksPowered: 0,
			userInput: null,
			logNameUserInput: null,
			logPasswordUserInput: null,
			logDescriptionUserInput: null,
			logDurationUserInput: null,
			logDateUserInput: null
		};

		this.putDataToDb = this.putDataToDb.bind(this);
		this.putLogToDb = this.putLogToDb.bind(this);
		this.callback = this.callback.bind(this);
		this.callbackLog = this.callbackLog.bind(this);
		this.handleCopy = this.handleCopy.bind(this);
		this.toggle = this.toggle.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleLogFormChange = this.handleLogFormChange.bind(this);
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

	// our put method that uses our backend api
	// to create new query into our data base
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

	// our put method that uses our backend api
	// to create new query into our data base
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

	callbackLog(response) {
		console.log(response.data);
	}

	handleFormChange(userInput) {
		this.setState({
			userInput: userInput
		});
	}

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

	//copies a shortened URL to keyboard
	handleCopy() {
		//clear any selection
		if (window.getSelection) {window.getSelection().removeAllRanges();}

		//copy text in #shortened-url to clipboard
		let range = document.createRange();
		range.selectNode(document.getElementById('shortened-url'));
		window.getSelection().addRange(range);
		document.execCommand("copy");
		console.log("copied");

		//re-clear any selection
		if (window.getSelection) {window.getSelection().removeAllRanges();}
	}

	//handles popover when link is copied to clipboard
	toggle() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	}

	render() {
		return(
			<div>
				<CreateUser
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
				/>

			</div>
		)
	}
	/*
	render() {
		return (
		<div className='page'>	

			<div className='main' id='main'>
				<div className='statement'>
					<h1>SAVE BITS, USE SHORT URLS.</h1>
				</div>

				<CreateUser
					handleFormChange={this.handleFormChange}
					userInput={this.state.userInput}
					handleClick={this.putDataToDB}
				/>

				{this.state.shortenedUrl != null &&
				<UrlDisplay
					shortenedUrl={this.state.shortenedUrl}
					popoverHidden={this.state.popoverHidden}
					popoverOpen={this.state.popoverOpen}
					handleClick={this.handleCopy}
					toggle={this.toggle}
				/>
				}

			</div>
			
			<Description/>

			<FrameAndButton/>

			<Ending
				linksPowered={this.state.linksPowered}
			/>

			<Footer/>

		</div>
		);
	}*/
}