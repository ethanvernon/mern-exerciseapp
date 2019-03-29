import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Input } from 'reactstrap';
import './App.css';


export class UrlForm extends Component {

	// initialize our state 

	constructor(props) {
		super(props);
		
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	//passes changed value from form to Home.js
	handleChange(e) {
		this.props.handleFormChange(e.target.value);
	}

	//copies a shortened URL to keyboard
	handleClick() {
		this.props.handleClick();
	}
	
	render() {
		return (
			<div className='form-container'>
				<Form inline id='url-form'>
					<Input id='url-input' type="text" name='url' placeholder="Paste a link to shorten it"
						value={this.props.userInput}
						onChange={e => this.handleChange(e)}							
					/>
					<Button id='inline-button' color='primary' value="POST URL" 
						onClick={this.handleClick}
					>
						SHORTEN
					</Button>
				</Form>
			</div>	
		);
	}
}