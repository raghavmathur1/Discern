import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
				<Link to="/us">
					<Country img={usa} text="USA" />
				</Link>
				<Link to="/uk">
					<Country img={uk} text="UK" />
				</Link>
				<Link to="/Canada">
					<Country img={can} text="Canada" />
				</Link>
				<Link to="/India">
					<Country img={ind} text="India" />
				</Link>
				<Link to="/Singapore">
					<Country img={sing} text="Singapore" />
				</Link>
				<Link to="/Australia">
					<Country img={aus} text="Australia" />
				</Link>
				<Link to="/Eurasia">
					<Country img={ee} text="Eurasia" />
				</Link>
			</div>
		);
	}
}
