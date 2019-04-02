import React, { Component } from 'react';
import {Header} from './Header';
import {Home} from './Home';
import {Documentation} from './Documentation';
import {Footer} from './Footer';
import {SignUp} from './SignUp';
import {Log} from './Log';
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
						<Route exact path='/documentation' component={Documentation}></Route>
						<Route exact path='/signup' component={SignUp}></Route>
						<Route exact path='/log' component={Log}></Route>
					</Switch>
					<Footer/>
				</div>
			</Router>
		);
	}
}


export default App;
