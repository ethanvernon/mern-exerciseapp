import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export class CreateUserDescription extends Component {
	render() {
		return (
			<div className='description'>
				<div className='description-text'>
					<p>This API is completely free to use.</p>
					<p>Enter a username and click "submit" to get your free passkey.</p>
				</div>
			</div>
	    );
  }
}