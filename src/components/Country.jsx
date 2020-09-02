import React, { Component } from 'react';

class Country extends Component {
	render() {
		return (
			<div className="cbox">
				<div className="ph">
					<img src={this.props.img} alt="" className="photo" />
					<div className="cname">{this.props.text}</div>
				</div>
			</div>
		);
	}
}

export default Country;
