import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

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
						<div>About</div>
					</Link>
					<Link to="service" smooth={true} offset={-110}>
						<div>Services</div>
					</Link>
					<Link to="explore" smooth={true} offset={-110}>
						<div>Explore</div>
					</Link>
					<div>Contact</div>
					<span></span>
				</div>
			</div>
		);
	}
}
export default Nav;
