import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Input } from 'reactstrap';
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
			<div className='form-container'>
				<Form inline id='url-form'>
					<Input id='user-input' type="text" name='user' placeholder="username"
						value={this.props.logNameUserInput}
						onChange={e => this.handleChange(e, 'user')}							
					/>
					<Input id='pw-input' type="text" name='pw' placeholder="password"
						value={this.props.logPasswordUserInput}
						onChange={e => this.handleChange(e, 'password')}							
					/>
					<Input id='description-input' type="text" name='description' placeholder="description"
						value={this.props.logDescriptionUserInput}
						onChange={e => this.handleChange(e, 'description')}							
					/>
					<Input id='duration-input' type="text" name='duration' placeholder="duration"
						value={this.props.logDurationUserInput}
						onChange={e => this.handleChange(e, 'duration')}							
					/>
					<Input id='date-input' type="text" name='date' placeholder="date"
						value={this.props.logDateUserInput}
						onChange={e => this.handleChange(e, 'date')}							
					/>
					<Button id='inline-button' color='primary' value="POST LOG" 
						onClick={this.handleClick}
					>
						LOG
					</Button>
				</Form>
			</div>	
		);
	}
}