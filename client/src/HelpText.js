import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export class HelpText extends Component {

	//clickable queries on the home page that can give users examples
	//of how to use the form

	constructor(props) {
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}

	//auto-fills the form and submits a GET request
	handleClick(query) {
		this.props.handleClick(query);
	}

	render() {
		return (
			<div id='help-text'>
				<p>Need a hint? try <a onClick={e => this.handleClick('username=ethan&limit=5')}><i>username=ethan&limit=5</i></a> 
				, <a onClick={e => this.handleClick('username=ethan&to=2016-01-30')}><i>username=ethan&to=2016-01-30</i></a>
				, or <a onClick={e => this.handleClick('username=ethan&from=2015-06-11')}><i>username=ethan&from=2015-06-11</i></a></p>
			</div>
	    );
  }
}