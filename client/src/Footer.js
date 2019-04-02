import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<div className='social-media'>
					<a href="https://github.com/ethanvernon" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={ faGithub } size='2x' color='#212529' className='social-icons'/>
					</a>
					<a href="https://www.linkedin.com/in/ethanvernon/" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={ faLinkedinIn } size='2x' color='#212529' className='social-icons'/>	
					</a>
				</div>
				<p>Handcrafted by © <a href="http://fromgaming.com/" target='_blank'>Ethan Vernon</a></p>	
			</div>
		);
	}
}