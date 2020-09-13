import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
class Nav extends Component {
	render() {
		return (
			<div className="nav">
				<div className="logo"></div>
				<div className="links">
					<Link to="main" smooth={true} offset={-80}>
						<div>Home</div>
					</Link>
					<Link to="about" smooth={true} offset={-80}>
						<div>About Us</div>
					</Link>
					<Link to="service" smooth={true} offset={-110}>
						<div>Services</div>
					</Link>
					<Link to="explore" smooth={true} offset={-80}>
						<div>Explore</div>
					</Link>
					<Link to="contact" smooth={true} offset={-110}>
						<div>Contact Us</div>
					</Link>
					<div><FontAwesomeIcon icon={faEnvelope} className="icons" /></div>
					<div><FontAwesomeIcon icon={faLinkedinIn} className="icons" /></div>
					<div><FontAwesomeIcon icon={faWhatsapp} className="icons" /></div>
				</div>
			</div>
		);
	}
}
export default Nav;
