import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export class Title extends Component {

	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return (
			<div className='heading'>
				<h1>MERN Exercise Log API</h1>
				<div className='key-solution'>
					<p>An API for logging your daily exercise</p>
				</div>
			</div>
	    );
  }
}