import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

class Contact extends Component {
	render() {
		return (
			<div className="con">
				<div className="sectionHead">
					Contact
					<div className="line"></div>
				</div>
				
				<div className="info">
					<div>
						<FontAwesomeIcon icon={faEnvelope} className="in" />
						<span className="in">discernandlearn@gmail.com</span>
					</div>
					<div>
						<FontAwesomeIcon icon={faLinkedinIn} className="in" />
						<span className="in">https://www.linkedin.com/in/discernandlearn</span>
					</div>
					<div>
						<FontAwesomeIcon icon={faWhatsapp} className="in" />
						<span className="in">+91 9818013686</span>
					</div>
					<div>
						<FontAwesomeIcon icon={faPhone} className="in rot" />
						<span className="in">Monday - Saturday, 10 AM - 7 PM IST</span>
					</div>
					<div>
						<div className="phones">• Neetu Gupta: </div>
						<div className="num">&nbsp; +91 9818013686</div>
						<div className="phones">• Shilpa Goyal: </div>
						<div className="num">&nbsp; +91 9717580992</div>
						<div className="phones">• Prachi Bansal: </div>
						<div className="num">&nbsp; +91 8374257023</div>
					</div>
					<div>
						<FontAwesomeIcon icon={faBuilding} className="in" />
						<span className="in">Offices:</span>
					</div>
					<div>
						<div className="phones">• Delhi: </div>
						<div className="num">
							&nbsp; 1 Flagstaff Road, Civil Lines, Delhi - 110054{' '}
						</div>
						<div className="phones">• Hyderabad: </div>
						<div className="num">
							&nbsp; 5 - 9 -30 - 1/4, Road No. 2, Basheeer Bagh Palace, <br /> &nbsp;&nbsp;Hyderabad -500063{' '}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
