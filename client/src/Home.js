import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import {UrlForm} from './UrlForm';
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
			intervalIsSet: false,
			userInput: null
		};

		this.putDataToDB = this.putDataToDB.bind(this);
		this.callback = this.callback.bind(this);
		this.handleCopy = this.handleCopy.bind(this);
		this.toggle = this.toggle.bind(this);
		this.getDataFromDb = this.getDataFromDb.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
	}

	// fetches existing data, then updates every minute
	componentDidMount() {
		window.scrollTo(0,0);
		this.getDataFromDb();
		if (!this.state.intervalIsSet) {
			let interval = setInterval(this.getDataFromDb, 60000);
			this.setState({ intervalIsSet: interval });
		}
	}

	// never let a process live forever 
	// always kill a process everytime we are done using it
	componentWillUnmount() {
		if (this.state.intervalIsSet) {
			clearInterval(this.state.intervalIsSet);
			this.setState({ intervalIsSet: null });
		}
	}

	// fetch's data from databse to update number of links generated
	getDataFromDb = () => {
		axios.get("/getData")
			.then(data => {
				//handle success
				//console.log('data returned looks like this: ' + data);
				//console.log("stringified that's like this: " + JSON.stringify(data));
				//data.json();
				this.setState({ linksPowered: data.data.length });
			}).catch(err =>{
				//handle error
				console.log(err);
			});
	};

	//console.log's the new document made by putDataToDB
	callback = (response) => {
		//console.log('response from post is: ' + response);
		//console.log(JSON.stringify(response));
		console.log(response.data.original_url + ' has been shortened to ' + response.data.short_url);

		//updates number of urls
		this.getDataFromDb();

		let urlToDisplay= 'https://mernurl.herokuapp.com/' + response.data.short_url;

		//handle bad urls
		if (response.data.short_url == undefined) {
			//show error message
			urlToDisplay = 'Invalid URL. Please check again. Make sure to include http:// or https://';
			//disable popover for copying link
			this.setState({
				popoverHidden:true
			});
		} else {
			//make sure popover for copying link is enabled
			this.setState({
				popoverHidden:false
			})
		}

		//change state so that shortenedURL will display
		this.setState({
			shortenedUrl: urlToDisplay,
			popoverOpen: false
		});
	}

	// our put method that uses our backend api
	// to create new query into our data base
	putDataToDB() {

		var urlToShorten = this.state.userInput;

		console.log('calling axios.post from react');
		axios.post("/api/shorturl/new", {
			url: urlToShorten
		}).then(response => {
			console.log('sending response to console.log from react');
			this.callback(response);
		}).catch(err =>{
			console.log(err);
		});
	}

	handleFormChange(userInput) {
		this.setState({
			userInput: userInput
		});
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
		return (
		<div className='page'>	

			<div className='main' id='main'>
				<div className='statement'>
					<h1>SAVE BITS, USE SHORT URLS.</h1>
				</div>

				<UrlForm
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
	}
}