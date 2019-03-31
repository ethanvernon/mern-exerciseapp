import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export class Description extends Component {
	render() {
		return (
			<div className='description'>
				<div className='description-text'>
					<p>This is a simple API for logging your daily exercise which is accessible through a modern RESTful API.</p>
					<p>Enjoy the MERN Exercise Log API!</p>
				</div>
			</div>
	    );
  }
}