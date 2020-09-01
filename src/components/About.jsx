import React, { Component } from 'react';
import Members from "../components/Members.jsx"

class About extends Component {
	render() {
		return (
			<div className="container">
				<div className="about" >
					<div className="sectionHead">
						About
						<div className="line"></div>
					</div>
					<div className="atext quote">
						“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”
						<div>- Malcolm X</div>
					</div><br />
					<div className="atext longtext">
						While it is your aspirations, dreams and hard work that will see you soar
						high on the skies of success, we at Discern and Learn will be the wind
						beneath your wings. Our skilled and experienced team of college admission
						counsellors provide you with a clear vision backed by definite plans and
						steer your dreams in the right direction.
					</div>
				</div>

				<Members />
			</div>
		);
	}
}

export default About;
