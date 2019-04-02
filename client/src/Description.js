import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export class Description extends Component {
	render() {
		return (
			<div className='description'>
				<div className='description-text'>
					<p>This is a simple API for logging your daily exercise which is accessible through a modern RESTful API.</p>
					<p>Sign up <Link to="/signup"><a>here</a></Link>! Already a user? Log your excercise <Link to="/log"><a href="">here</a></Link>.</p>
				</div>
			</div>
	    );
  }
}