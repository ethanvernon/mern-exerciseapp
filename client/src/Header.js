import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import textLogo from './mern-text-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler} from 'reactstrap';

export class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
		isOpen: false
		};

		this.toggle = this.toggle.bind(this);
		this.closeNav = this.closeNav.bind(this);
	}


	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	closeNav() {
		if (this.state.isOpen == true) {
			this.toggle();
		}
	}


	render() {
	return (
		<div className='navbar-container'>
			<Navbar id='white-nav' color='light' light expand='md'>
				<NavbarBrand href="/" className="mr-auto"><Link to="/"><img src={textLogo}/></Link></NavbarBrand>
				<NavbarToggler onClick={this.toggle} className='mr-2'/>
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav navbar className='ml-auto'>
						<NavItem>
							<Link to="/" className='padded-nav' onClick={this.closeNav} > HOME </Link>
						</NavItem>

						<NavItem>
							<Link to="/about" className='padded-nav' onClick={this.closeNav} > ABOUT </Link>
						</NavItem>

						<NavItem>
							<a href='http://fromgaming.com/' target='_blank' to="/contact-us" className='padded-nav' onClick={this.closeNav} > CONTACT </a>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
    );
  }
}