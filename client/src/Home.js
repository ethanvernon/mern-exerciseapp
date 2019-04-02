import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import {Title} from './Title';
import {Description} from './Description';
import {BodyHeader} from './BodyHeader';
import {SearchAPI} from './SearchAPI';
import {ResultPre} from './ResultPre';
import {HelpText} from './HelpText';



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
		this.handleExampleQuery = this.handleExampleQuery.bind(this);
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
				//sets states which renders the result in the ResultPre component 
				this.setState({ searchResult: JSON.stringify(data.data, null, 2) });
			}).catch(err =>{
				//handle error
				console.log(err);
			});
	}

	//sends a GET request and fills an example query in whenever one of the example
	//queries are clicked 
	handleExampleQuery(query) {
		//builds query from example query
		var formQuery='/api/exercise/log/?' + query;

		this.setState({
			userInput: query
		});

		axios.get(formQuery)
			.then(data => {
				//sets states which renders the result in the ResultPre component 
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

				<HelpText
					handleClick={this.handleExampleQuery}
				/>

				<ResultPre
					searchResult={this.state.searchResult}
				/>

			</div>
		)
	}
}