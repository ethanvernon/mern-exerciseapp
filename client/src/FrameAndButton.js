import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './App.css';


export class FrameAndButton extends Component {
	
	render() {
		return (

			<div className='frame-frame'>
				<div className='frame-div'>
					<iframe 
						src="https://www.youtube.com/embed/lSX5dPdArZ0" 
						frameborder="0" 
						allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
						allowfullscreen/>
				</div>


				<div className='btn-holder'>				
					<Link to="/about"  > <Button color='primary' className='orange-button' >LEARN MORE</Button> </Link>					
				</div>
			</div>
			
		);
	}
}