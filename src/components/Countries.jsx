import React, { Component } from 'react';
import Country from '../components/Country.jsx';
import usa from '../images/usa.jpg';
import uk from '../images/uk.jpg';
import aus from '../images/aus.jpg';
import ind from '../images/ind.jpg';
import sing from '../images/sing.jpg';
import can from '../images/can.jpg';
import ee from '../images/ee.jpg';
export default class Countries extends Component {
	render() {
		return (
			<div className="clist">
				<Country img={usa} text="USA" />
				<Country img={uk} text="UK"/>
				<Country img={can} text="Canada"/>
				<Country img={ind} text="India"/>
				<Country img={sing} text="Singapore"/>
				<Country img={aus} text="Australia"/>
				<Country img={ee} text="East Europe"/>
			</div>
		);
	}
}
