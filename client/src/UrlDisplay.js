import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Popover, PopoverBody } from 'reactstrap';
import './App.css';


export class UrlDisplay extends Component {

	// initialize our state 

	constructor(props) {
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	//copies a shortened URL to keyboard
	handleClick() {
		this.props.handleClick();
	}

	toggle() {
		this.props.toggle();
	}
	
	render() {
		return (

			<div className='result-container' onClick={this.handleClick}>
				<div className='result-text' id='shortened-url'>
					{this.props.shortenedUrl}
				</div>
				{!this.props.popoverHidden && 
					<Popover placement="bottom" isOpen={this.props.popoverOpen} target="shortened-url" toggle={this.toggle}>
					<PopoverBody>Copied</PopoverBody>
					</Popover>
				}
			</div>
			
		);
	}
}