import React, { Component } from 'react';

class Main extends Component {
	render() {
		return (
			<div className="background">
				<div className="overlay"></div>
				<div className="countries">
					<div className="know">KNOW MORE:</div>
					<div>USA</div>
					<div>UK</div>
					<div>Canada</div>
					<div>India</div>
					<div>Singapore</div>
					<div>Australia</div>
					<div>Eurasia</div>
				</div>
				<div className="center">
					<div className="heading">For those who aim high and reach for the sky!</div>
				</div>
                <div className="circle circle3"></div>
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
			</div>
		);
	}
}

export default Main;
