import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, InputGroupAddon, InputGroupText, InputGroup } from 'reactstrap';
import './App.css';


export class SearchAPI extends Component {

	// initialize our state 

	constructor(props) {
		super(props);
		
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	//passes changed value from form to Home.js
	handleChange(e) {
		this.props.handleChange(e.target.value);
	}

	//copies a shortened URL to keyboard
	handleClick() {
		this.props.handleClick();
	}
	
	render() {
		return (
			<div className='search-container'>

				 <InputGroup>

					<InputGroupAddon addonType="prepend">
						<InputGroupText>http://localhost:3000/api/exercise/log/?</InputGroupText>
					</InputGroupAddon>

					<Input placeholder="username=ethan" type='text' value={this.props.userInput} onChange={e => this.handleChange(e)}/>

					<InputGroupAddon addonType="append">
						<Button color='primary' onClick={this.handleClick}>submit</Button>
					</InputGroupAddon>

				</InputGroup>
			</div>	
		);
	}
}