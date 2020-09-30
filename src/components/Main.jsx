import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Main extends Component {
	// linkLogic() {
	// 	this.state.num = 0;
	// 	alert(this.state.num);
	// }
	render() {
		return (
			<div className="background">
				<div className="overlay"></div>
				<div className="countries" onClick={this.linkLogic}>
					<div className="know">KNOW MORE:</div>
					<Link to="/us">
						<div>USA</div>
					</Link>
					<Link to="/uk">
						<div>UK</div>
					</Link>
					<Link to="/Canada">
						<div>Canada</div>
					</Link>
					<Link to="/India">
						<div>India</div>
					</Link>
					<Link to="/Singapore">
						<div>Singapore</div>
					</Link>
					<Link to="/Australia">
						<div>Australia</div>
					</Link>
					<Link to="/Eurasia">
						<div>Eurasia</div>
					</Link>
				</div>

				<div className="heading">For those who aim high and reach for the sky!</div>
				<div className="circle circle3"></div>
				<div className="circle circle1"></div>
				<div className="circle circle2"></div>
			</div>
		);
	}
}

export default Main;
