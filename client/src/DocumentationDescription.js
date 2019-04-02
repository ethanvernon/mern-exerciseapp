import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export class DocumentationDescription extends Component {
	render() {
		return (
			<div className='description'>
				<div className='description-text'>
					<p>This API can be consumed using this website.</p>
					<p>You can also build your own GET requests using the information below.</p>
				</div>
			</div>
	    );
  }
}