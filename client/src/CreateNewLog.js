import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, InputGroupAddon, InputGroupText, InputGroup, Label } from 'reactstrap';
import './App.css';


export class CreateNewLog extends Component {

	// initialize our state 

	constructor(props) {
		super(props);
		
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	//passes changed value from form to Home.js
	handleChange(e, field) {
		this.props.handleLogFormChange(e.target.value, field);
	}

	//copies a shortened URL to keyboard
	handleClick() {
		this.props.handleClick();
	}
	
	render() {
		return (
			<div className='search-container'>
				<FormGroup className='new-log-form'>
					<Label for='user-input'>Username</Label>
					<Input id='user-input' type="text" name='user' 
						value={this.props.logNameUserInput}
						onChange={e => this.handleChange(e, 'user')}							
					/>


					<Label for='pw-input'>Passkey</Label>
					<Input id='pw-input' type="text" name='pw' 
						value={this.props.logPasskeyUserInput}
						onChange={e => this.handleChange(e, 'passkey')}							
					/>

					<Label for='description-input'>Description</Label>
					<Input id='description-input' type="text" name='description'
						value={this.props.logDescriptionUserInput}
						onChange={e => this.handleChange(e, 'description')}							
					/>

					<Label for='duration-input'>Duration</Label>
					<Input id='duration-input' type="text" name='duration'
						value={this.props.logDurationUserInput}
						onChange={e => this.handleChange(e, 'duration')}							
					/>

					<Label for='date-input'>Date</Label>
					<Input id='date-input' type="text" name='date' placeholder="YYYY-MM-DD"
						value={this.props.logDateUserInput}
						onChange={e => this.handleChange(e, 'date')}							
					/>
					<Button  
						color='primary' 
						onClick={this.handleClick}
						className='log-form-submit'
					>
						submit
					</Button>
				</FormGroup>
			</div>	
		);
	}
}