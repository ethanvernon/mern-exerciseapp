import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export class ResultPre extends Component {

	render() {
		return (
			<div className='result-container'>
				<pre id='result-output'>
				hey
					{this.props.searchResult}
				</pre>
			</div>
	    );
  }
}