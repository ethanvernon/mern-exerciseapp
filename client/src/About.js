import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {Footer} from './Footer';
import './App.css';


export class About extends Component {

	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return (
		<div className='logistics'>	

			<div className='heading'>
				<h1>LINK MANAGEMENT PLATFORM</h1>
				<div className='key-solution'>
					<p>Quisque mi odio, consectetur commodo scelerisque eget, aliquet a augue. A fusce euismod lacus vel urna dapibus, a laoreet tortor placerat. Sed gravida neque tellus. </p>
				</div>
			</div>

			<div className='perks'>
				<h2>LINKS ARE MORE IMPORTANT THAN EVER BEFORE</h2>
				<p className='perks-desc'>Sed ultricies mi quis ipsum auctor, sit amet pretium. Mi accumsan phasellus.</p>
					<Container className='perk-cards-container'>
						<Row>
							<Col md='4' className='perk-card'>
								<FontAwesomeIcon className='perks-icon' icon={faCoffee} size='3x' transform='grow-1' color='#ff6700'/>
								<h3 className='card-h3'>Perk One</h3>
								<p className='card-p'>Pellentesque eleifend arcu nisi, feugiat efficitur ligula pharetra non. Morbi nunc neque, lacinia quis nisl a, volutpat volutpat enim. Morbi est lectus, luctus sit amet metus ac, porttitor tristique dui. Phasellus rhoncus odio non erat rutrum efficitur porta nec ipsum. </p>
							</Col>
							<Col md='4' className='perk-card'>
								<FontAwesomeIcon className='perks-icon' icon={faCoffee} size='3x' transform='grow-1' color='#ff6700'/>
								<h3 className='card-h3'>Perk Two</h3>
								<p className='card-p'>Pellentesque eleifend arcu nisi, feugiat efficitur ligula pharetra non. Morbi nunc neque, lacinia quis nisl a, volutpat volutpat enim. Morbi est lectus, luctus sit amet metus ac, porttitor tristique dui. Phasellus rhoncus odio non erat rutrum efficitur porta nec ipsum. </p>
							</Col>
							<Col md='4' className='perk-card'>
								<FontAwesomeIcon className='perks-icon' icon={faCoffee} size='3x' transform='grow-1' color='#ff6700'/>
								<h3 className='card-h3'>Perk Three</h3>
								<p className='card-p'>Pellentesque eleifend arcu nisi, feugiat efficitur ligula pharetra non. Morbi nunc neque, lacinia quis nisl a, volutpat volutpat enim. Morbi est lectus, luctus sit amet metus ac, porttitor tristique dui. Phasellus rhoncus odio non erat rutrum efficitur porta nec ipsum. </p>
							</Col>				
						</Row>
					</Container>
			</div>

			<div className='driver'>
				<h2 className='driver-h2'>The link puts <span className='cool-ul'>you</span> back<br/> </h2>
				<h2 className='driver-h2 driver-right'>in the <span className='cool-ul'>driver’s seat</span>.</h2>
				<p className='driver-p'>Aliquam nisl lectus, iaculis nec suscipit ac, feugiat eu nibh. Donec suscipit, diam in ultrices laoreet, velit augue venenatis nisl, 
				at gravida nibh nunc quis quam. Curabitur sit amet risus metus. Duis sed volutpat erat, id hendrerit risus. Sed dapibus id sem eget imperdiet. 
				Donec blandit, eros ut gravida suscipit, enim lorem fermentum metus.</p>
				<p className='driver-p'>Ut lobortis lacus ipsum vel justo. Donec cursus semper dolor, et egestas dui rhoncus.</p>
			</div>

			<div className='frame-frame'>
				<div className='frame-div'>
					<iframe 
						src="https://www.youtube.com/embed/lSX5dPdArZ0" 
						frameborder="0" 
						allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
						allowfullscreen/>
				</div>
			</div>

			<div className='ending'>
				<h2>CURABITUR VENANTS</h2>
				<Container><Row>
					<Col md='4' lg='4'>
						<div className='quantifiable'>
							<h2>39%</h2>
							<h3>Interdum et malesu</h3>
						</div>
					</Col>
					<Col md='4' lg='4'>
						<div className='quantifiable'>
							<h2>99%</h2>
							<h3>Ante ipsum primis</h3>
						</div>
					</Col>
					<Col md='4' lg='4'>
						<div className='quantifiable'>
							<h2>385</h2>
							<h3>Morbi quis magna</h3>
						</div>
					</Col>
				</Row></Container>
			</div>

			<Footer/>

		</div>
	    );
  }
}