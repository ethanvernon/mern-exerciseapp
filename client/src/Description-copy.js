import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './App.css';


export class Description extends Component {
	
	render() {
		return (

			<div className='description'>
				<h2>UNLEASH THE POWER OF THE LINK</h2>
				<p className='desc-p'>Hyperlinks are everywhere and they can lead you to just as many places. Help others by saving space on the interweb and shortening your links using the form above.</p>
				<Container className='perk-cards-container'>
					<Row>
						<Col md='4' className='perk-card'>
							<FontAwesomeIcon icon={faCoffee} size='3x' transform='grow-1' color='#ff6700'/>
							<h3 className='card-h3'>Perk One</h3>
							<p className='card-p'>Pellentesque eleifend arcu nisi, feugiat efficitur ligula pharetra non. Morbi nunc neque, lacinia quis nisl a, volutpat volutpat enim. Morbi est lectus, luctus sit amet metus ac, porttitor tristique dui. Phasellus rhoncus odio non erat rutrum efficitur porta nec ipsum. </p>
						</Col>
						<Col md='4' className='perk-card'>
							<FontAwesomeIcon icon={faCoffee} size='3x' transform='grow-1' color='#ff6700'/>
							<h3 className='card-h3'>Perk Two</h3>
							<p className='card-p'>Pellentesque eleifend arcu nisi, feugiat efficitur ligula pharetra non. Morbi nunc neque, lacinia quis nisl a, volutpat volutpat enim. Morbi est lectus, luctus sit amet metus ac, porttitor tristique dui. Phasellus rhoncus odio non erat rutrum efficitur porta nec ipsum. </p>
						</Col>
						<Col md='4' className='perk-card'>
							<FontAwesomeIcon icon={faCoffee} size='3x' transform='grow-1' color='#ff6700'/>
							<h3 className='card-h3'>Perk Three</h3>
							<p className='card-p'>Pellentesque eleifend arcu nisi, feugiat efficitur ligula pharetra non. Morbi nunc neque, lacinia quis nisl a, volutpat volutpat enim. Morbi est lectus, luctus sit amet metus ac, porttitor tristique dui. Phasellus rhoncus odio non erat rutrum efficitur porta nec ipsum. </p>
						</Col>				
					</Row>
				</Container>
			</div>
			
		);
	}
}