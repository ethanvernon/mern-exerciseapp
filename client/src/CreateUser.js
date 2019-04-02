import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormGroup, Input, InputGroupAddon, InputGroup, Label } from 'reactstrap';
import './App.css';

export class CreateUser extends Component {

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
			<div className='search-container'>

			<FormGroup className='new-user-form'>

          		<Label for='newUser'>Username</Label>

				<InputGroup>

				<Input type='text' id='newUser' value={this.props.userInput} onChange={e => this.handleChange(e)}/>

				<InputGroupAddon addonType="append">
					<Button color='primary' onClick={this.handleClick}>submit</Button>
				</InputGroupAddon>

				</InputGroup>

			</FormGroup>
			</div>	
		);
	}
}