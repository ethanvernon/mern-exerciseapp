import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export class LogDescription extends Component {
	render() {
		return (
			<div className='description'>
				<div className='description-text'>
					<p>This form can be used to make POST requests.</p>
					<p>Fill out the form and click "submit" to make a new entry.</p>
				</div>
			</div>
	    );
  }
}