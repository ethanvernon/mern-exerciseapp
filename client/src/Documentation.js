import React, { Component } from 'react';
import {DocumentationTitle} from './DocumentationTitle';
import {DocumentationDescription} from './DocumentationDescription';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export class Documentation extends Component {

	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return (
			<div>
			<DocumentationTitle/>
			<DocumentationDescription/>
			<div className='documentation'>
				<h2>Introduction</h2>
				<hr/>
				<p>Welcome! This documentation should help you familiarize yourself with the resources available and how to consume them with HTTP requests.
				Read through the getting started section before you dive in. 
				Most of your problems should be solved just by reading through it.</p>

				<h2>Getting started</h2>
				<hr/>
				<p>Let's make our first API request!</p>
				<p>Open up the home page (or your own API request resource) to make an API request for a resource.
				In the example below, we're trying to get all the exercise logs for the user with the username "ethan":</p>

				<div className='desc-container'>
					<pre id='desc-output'>
						https://mernlog.herokuapp.com/api/log/?username=ethan
					</pre>
				</div>

				<p>Here is the response we get:</p>

				<div className='desc-container'>
					<pre id='desc-output'>
						{JSON.stringify(
							[
							  {
							    "description": "running",
							    "duration": 5,
							    "date": "2019-03-25T00:00:00.000Z"
							  },
							  {
							    "description": "soccer",
							    "duration": 60,
							    "date": "2017-03-05T00:00:00.000Z"
							  },
							  {
							    "description": "soccer",
							    "duration": 60,
							    "date": "2015-03-05T00:00:00.000Z"
							  },
							  {
							    "description": "lifting",
							    "duration": 60,
							    "date": "2017-03-05T00:00:00.000Z"
							  },
							  {
							    "description": "lifting",
							    "duration": 60,
							    "date": "2010-03-05T00:00:00.000Z"
							  },
							  {
							    "description": "football",
							    "duration": 30,
							    "date": "2019-04-02T00:00:00.000Z"
							  }
							]
						, null, 2)}
					</pre>
				</div>

				<p>If your response looks slightly different don't panic. This is probably because the API has has changed slightly since making this documentation.</p>
								
				<h2>Base URL</h2>
				<hr/>
				<p>The Base URL is the root URL for all of the API.
				If you ever make a request to MERN Exercise Log API and you get back a 404 NOT FOUND response then check the Base URL first.</p>
				<p>The Base URL for the MERN Exercise Log API:</p>

				<div className='desc-container'>
					<pre id='desc-output'>
						https://mernlog.herokuapp.com/api/log/?
					</pre>
				</div>

				<p>The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.</p>
								
				<h2>Passkey</h2>
				<hr/>
				<p>Anytime you want to make a GET request for a user's log, you have to include the user's passkey with that request.
				You can add a passkey like so:</p>

				<div className='desc-container'>
					<pre id='desc-output'>
						https://mernlog.herokuapp.com/api/log/?username=ethan&passkey=password1
					</pre>
				</div>

				<p>Note that all additional parameters you add to the GET request must be separated with the ampersand (&).
				If a passkey is not included, the request will fail.</p>
								
				<h2>Limit</h2>
				<hr/>
				<p>You can use the limit parameter as an optional parameter to limit the number of log entries returned. The limit parameter must be a whole number.</p>
				<p>For our example, we will again query the user with username "ethan", but this time we will limit the log to only 3 entries.</p>

				<div className='desc-container'>
					<pre id='desc-output'>
						https://mernlog.herokuapp.com/api/log/?username=ethan&passkey=password1&limit=3
					</pre>
				</div>

				<p>If you remember above, the user with username "ethan" has more than 3 log entries.
				However, since we set the limit parameter to 3, only the first 3 entries will be returned.
				Thus, our response looks like this:</p>

				<div className='desc-container'>
					<pre id='desc-output'>
						{JSON.stringify(
							[
							  {
							    "description": "running",
							    "duration": 5,
							    "date": "2019-03-25T00:00:00.000Z"
							  },
							  {
							    "description": "soccer",
							    "duration": 60,
							    "date": "2017-03-05T00:00:00.000Z"
							  },
							  {
							    "description": "soccer",
							    "duration": 60,
							    "date": "2015-03-05T00:00:00.000Z"
							  }
							]
						, null, 2)}
					</pre>
				</div>

				<p>If your response looks slightly different don't panic. This is probably because the API has has changed slightly since making this documentation.</p>
								
				<h2>From</h2>
				<hr/>
				<p>The from parameter is another optional parameter for filtering the GET request results.
				This parameter limits the results to only those entries which happened after the date specified.
				When using the from parameter, dates must be in the format YYYY-MM-DD.
				If we want to query the user with username "ethan" but only return those entries after January 25th, 2017, then our query would look like this:</p>

				<div className='desc-container'>
					<pre id='desc-output'>
						https://mernlog.herokuapp.com/api/log/?username=ethan&passkey=password1&from=2017-01-25
					</pre>
				</div>

				<p>The user with username "ethan" has log entries before the date January 25th, 2017, but because of the from parameter, those entries are not returned.
				Thus, our response looks like this:</p>

				<div className='desc-container'>
					<pre id='desc-output'>
						{JSON.stringify(
							[
							  {
							    "description": "running",
							    "duration": 5,
							    "date": "2019-03-25T00:00:00.000Z"
							  },
							  {
							    "description": "soccer",
							    "duration": 60,
							    "date": "2017-03-05T00:00:00.000Z"
							  },
							  {
							    "description": "lifting",
							    "duration": 60,
							    "date": "2017-03-05T00:00:00.000Z"
							  },
							  {
							    "description": "football",
							    "duration": 30,
							    "date": "2019-04-02T00:00:00.000Z"
							  }
							]
						, null, 2)}
					</pre>
				</div>

				<p>If your response looks slightly different don't panic. This is probably because the API has has changed slightly since making this documentation.</p>
								
				<h2>To</h2>
				<hr/>
				<p>The to parameter is another optional parameter for filtering the GET request results.
				This parameter limits the results to only those entries which happened before the date specified.
				When using the to parameter, dates must be in the format YYYY-MM-DD.
				If we want to query the user with username "ethan" but only return those entries before January 25th, 2017, then our query would look like this:</p>

				<div className='desc-container'>
					<pre id='desc-output'>
						https://mernlog.herokuapp.com/api/log/?username=ethan&passkey=password1&to=2017-01-25
					</pre>
				</div>

				<p>The user with username "ethan" has log entries after the date January 25th, 2017, but because of the to parameter, those entries are not returned.
				Thus, our response looks like this:</p>

				<div className='desc-container'>
					<pre id='desc-output'>
						{JSON.stringify(
							[
							  {
							    "description": "lifting",
							    "duration": 60,
							    "date": "2010-03-05T00:00:00.000Z"
							  },
							  {
							    "description": "soccer",
							    "duration": 60,
							    "date": "2015-03-05T00:00:00.000Z"
							  }
							]
						, null, 2)}
					</pre>
				</div>
			</div>
			</div>
	    );
  }
}