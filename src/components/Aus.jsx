import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ausback from '../images/ausback.jpg'
var sty = {
    backgroundImage: `url(${ausback})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`
}
class Aus extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div>
				<div className="cback" style={sty}>
				<Link to="/">
						<div className="toback">Back</div>
					</Link>
				</div>
				<div className="sectionHead sp">
					Australia
					<div className="line spa"></div>
				</div>
				<div className="ltext">
					<div>
						If dreams are really made of sun and sand, then Australia is a dream come
						true! The island nation is soon catching up with the US and UK as a hugely
						popular destination for higher studies among international students.
						<br />
						<br />
						The Land Down Under boasts of an extremely friendly and diverse culture and
						has an excellent as well as affordable education system. Its strong economy
						leads to well paying jobs and consequently, a high standard of living. The
						easy visa and immigration policies are also favourable for possible
						immigrants. All these factors contribute to making Australia attractive to
						study.
					</div>
					<div className="ff">
						<div className="bol cen">Australia General Climate</div>
						<ul>
							<li>Daytime summer temperatures: 30°C and higher</li>
							<li>Winter temperatures: 15°C-16°C</li>
						</ul>
					</div>
					<div className="ff">
						<div className="bol cen">Australia Fun Fact</div>
						Australia is quite the proverbial melting pot of cultures. Almost half of
						Australia’s population was born overseas or has at least one parent who was
						born overseas and moved to Australia. It has around 200 different types of
						races and cultures and 300 different languages and dialects.
					</div>
					<div className="bol ques">Does Australia provide quality education?</div>
					<div>
						Australian Universities have a strong emphasis on research. A few
						prestigious and coveted Australian Universities such as University of
						Melbourne, University of Queensland, Australian National University and
						Monash University are highly competitive and securing admission is tough.
						These universities offer courses from the whole spectrum of education, such
						as Accountancy, Engineering, Psychology, Architecture and Hospitality.
						<br />
						<br />
						The Bachelors degree in Australia is a three-year program. However, a few
						institutes provide a fast-track system that allows students to complete a
						three-year degree in two years. This helps international students in saving
						costs considerably.
					</div>
					<div className="bol ques">Can you work while you study in Australia?</div>
					<div>
						Australia’s work regulations are extremely favorable for international
						students and provide them with an opportunity to work
						<span className="bol"> part time upto 20 hours every week</span> during
						their semesters and for <span className="bol">unlimited hours</span> during
						<span className="bol"> holidays or scheduled breaks</span>.
					</div>
					<div className="bol ques">
						What are the immigration opportunities in Australia?
					</div>
					<div>
						Australian government’s policies are extremely favourable for international
						students. After completing their graduation, they can apply for a work
						permit that allows them to stay in Australia for 18 months (more than most
						countries). This helps them gain some international work experience and they
						can apply for permanent residency later on.
					</div>
					<div className="bol ques">
						What is the Application Procedure for Australian Universities?
					</div>
					<div>
						The <span className="bol">Fall intake </span>or semester in Australia is in{' '}
						<span className="bol">February-March</span>. University deadlines for the
						Fall intake are generally from{' '}
						<span className="bol">late October to middle of November </span>of the
						preceding year.
						<br /> <br /> The <span className="bol">Spring intake</span> is in{' '}
						<span className="bol">June-July</span>. University deadlines for the Spring
						intake are generally from
						<span className="bol"> middle of April to middle of May </span>of the same
						year.
						<br /> <br />
						Students applying to a university in Australia need to submit their
						applications directly to the institute itself.
					</div>
					<div className="bol ques">
						Which documents are required for applying to Australian Universities?
					</div>
					<div>
						Students will need the following documents for applying to Australian
						Universities:
						<ul>
							<li>Completely filled application form</li>
							<li>High school transcripts</li>
							<li>Two Letters of Recommendation (LOR)</li>
							<li>Statements of Purpose (SOP)</li>
							<li>
								TOEFL/IELTS/PTE Exam Score Xerox (only if the medium of education is
								NOT English)
							</li>
						</ul>
						The minimum subject score requirement varies from course to course. Apart
						from academic scores, universities also take students’ extracurricular
						activities and portfolio into consideration for admission.
					</div>
				</div>
			</div>
		);
	}
}
export default Aus;
