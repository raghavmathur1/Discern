import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCaretUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
class Nav extends Component {
	render() {
		return (
			<div className="nav">
				<div className="logo"></div>
				<Link to="main" smooth={true} offset={-80}>
					<div className="totop toback"><FontAwesomeIcon icon={faCaretUp} className="icons" /></div>
				</Link>
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
					<Link to="contact" smooth={true} offset={-80}>
						<div>Contact</div>
					</Link>

					<a href="mailto:discernandlearn@gmail.com">
						<div>
							<FontAwesomeIcon icon={faEnvelope} className="icons" />
						</div>
					</a>
					<a href="https://www.linkedin.com/in/discernandlearn">
						<div>
							<FontAwesomeIcon icon={faLinkedinIn} className="icons" />
						</div>
					</a>
					<a href="https://wa.me/+919818013686">
						<div>
							<FontAwesomeIcon icon={faWhatsapp} className="icons" />
						</div>
					</a>
				</div>
			</div>
		);
	}
}
export default Nav;
