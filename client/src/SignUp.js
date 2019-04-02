import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SignUpTitle} from './SignUpTitle';
import {CreateUser} from './CreateUser';
import {CreateUserDescription} from './CreateUserDescription';
import {ResultPre} from './ResultPre';
import './App.css';
import axios from "axios";


export class SignUp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			newUserInput: null,
			searchResult: null
		};

		this.putUserToDb = this.putUserToDb.bind(this);
		this.handleSignupFormChange = this.handleSignupFormChange.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0,0);
	}

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

	//this function updates this.state.userHomeInput whenever the form in CreateUser.js
	//changes. the state is then passed to the component to update form text
	handleSignupFormChange(userInput) {
		this.setState({
			newUserInput: userInput
		})
	}

	render() {
		return (
		<div className='signup'>
				<SignUpTitle/>

				<CreateUserDescription/>

				<CreateUser
					handleFormChange={this.handleSignupFormChange}
					userInput={this.state.newUserInput}
					handleClick={this.putUserToDb}
				/>

				<ResultPre
					searchResult={this.state.searchResult}
				/>

		</div>
	    );
  }
}