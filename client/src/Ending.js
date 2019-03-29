import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export class Ending extends Component {
	
	render() {
		return (

			<div className='ending'>
				<div className='quantifiable'>
					<h2>{this.props.linksPowered}</h2>
					<h3 className='ending-h3'>LINKS POWERED BY MERNURL</h3>
				</div>
			</div>
			
		);
	}
}