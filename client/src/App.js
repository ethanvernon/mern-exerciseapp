import React, { Component } from 'react';
import {Header} from './Header';
import {Home} from './Home';
import {About} from './About';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

class App extends Component {


	render() {

		return (
			<Router basename={process.env.PUBLIC_URL}>
				<div>
					<Header/>
					<Switch>
						<Route exact path='/' component={Home}></Route>
						<Route exact path='/about' component={About}></Route>
					</Switch>
				</div>
			</Router>
		);
	}
}


export default App;
