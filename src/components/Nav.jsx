import React, { Component } from 'react';

class Nav extends Component {
	render() {
		return (
			<div className="nav">
				<div className="logo"></div>
				<div className="links">
					<div>Home</div>
					<div>About</div>
					<div>Services</div>
					<div>Explore</div>
					<div>Contact</div>
					<span></span>
				</div>
			</div>
		);
	}
}
export default Nav;
