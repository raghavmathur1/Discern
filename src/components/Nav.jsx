import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faBars, faCaretUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import $ from 'jquery';
class Nav extends Component {
	componentDidMount() {
		let x = 0;
		$('.buto').click(function () {
			if (x === 0) {
				$('.nav2').css({ height: '100vh' });
				$('.nav2 .links div').css({ display: 'block', margin: '10px 0' });
				x = 1;
			} else {
				$('.nav2').css({ height: '60px' });
				$('.nav2 .links div').css({ display: 'none' });
				x = 0;
			}
		});
		$('.nav2 .links div').click(function () {
			$('.nav2').css({ height: '60px' });
			$('.nav2 .links div').css({ display: 'none' });
			x = 0;
		});
	}
	render() {
		return (
			<div>
				<div className="nav nav1">
					<FontAwesomeIcon icon={faBars} className="icons ham buto" />
					<div className="logo"></div>
					<Link to="main" smooth={true} offset={-80}>
						<div className="totop toback">
							<FontAwesomeIcon icon={faCaretUp} className="icons" />
						</div>
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
						<a href="https://www.facebook.com/discernandlearn/">
							<div>
								<FontAwesomeIcon icon={faFacebook} className="icons" />
							</div>
						</a>
						<a href="https://www.instagram.com/discernandlearn/">
							<div>
								<FontAwesomeIcon icon={faInstagram} className="icons" />
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
				<div className="nav nav2">
					<FontAwesomeIcon icon={faBars} className="icons ham buto" />
					<div className="logo"></div>
					<Link to="main" smooth={true} offset={-80}>
						<div className="totop toback">
							<FontAwesomeIcon icon={faCaretUp} className="icons" />
						</div>
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
						<a href="https://www.facebook.com/discernandlearn/">
							<div>
								<FontAwesomeIcon icon={faFacebook} className="icons" />
							</div>
						</a>
						<a href="https://www.instagram.com/discernandlearn/">
							<div>
								<FontAwesomeIcon icon={faInstagram} className="icons" />
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
			</div>
		);
	}
}

export default Nav;
