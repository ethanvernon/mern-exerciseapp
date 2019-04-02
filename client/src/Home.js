import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import {CreateUser} from './CreateUser';
import {CreateNewLog} from './CreateNewLog';
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
			userInput: null,
			searchResult: null
		};

		this.formGetData = this.formGetData.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
	}

	//whenever the home page form SearchAPI.js changes from user input, this function
	//updates this.state.userInput, which is then passed to the component
	handleFormChange(userInput) {
		this.setState({
			userInput: userInput
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
				/>

			</div>
		)
	}
}