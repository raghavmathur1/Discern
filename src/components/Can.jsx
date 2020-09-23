import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import canback from '../images/canback.jpg'
var sty = {
    backgroundImage: `url(${canback})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`
}
class Can extends Component {
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
					Canada
					<div className="line"></div>
				</div>
				<div className="ltext">
					<div>
						Canada provides an excellent quality of life to students who choose to study
						there. The Great White North (No Game of Thrones pun intended ;) ) is blessed
						with stunning natural beauty, cultural diversity, affordable tuition fees
						and warm and welcoming people who make the country absolutely safe and
						peaceful to live in. <br />
						<br />
						Taking these criteria into account, the QS World University Rankings lists
						three Canadian cities, Toronto, Montreal and Vancouver, among the top 50
						student cities.
					</div>
					<div className="ff">
						<div className="bol cen">Canada General Climate</div>
						<ul>
							<li>Daytime summer temperatures: 35°C and higher</li>
							<li>Winter temperatures: Upto -25°C</li>
							<li>Spring and fall are pleasant and see more moderate temperatures</li>
						</ul>
					</div>
					<div className="ff">
						<div className="bol cen">Canada Fun Fact</div>
						With more than half of its population having college degrees, Canada is the
						most educated country in the world.
					</div>
					<div className="bol ques">
						Does Canada Provide Affordable Quality Education?
					</div>
					<div>
						Quality education overseas comes at a price. However, in comparison, tuition
						rates in Canada are cheaper than many other countries including universities
						in the US and UK. According to the Times Higher Education World University
						Ratings 2018, five Canadian universities are ranked in the top 100 for the
						best universities in the world.
					</div>
					<div>
						Canadian Universities have a strong emphasis on research and development.
						The Canadian government provides immense support to research in various
						disciplines such as environmental science and technology, medicine,
						telecommunication, as well as agriculture. Their education system encourages
						multidisciplinary studies and the development of transferable skills (e.g.,
						critical thinking, teamwork and communications) and uses pioneering
						technology and digital media.
					</div>
					<div className="bol ques">Can you work while you study in Canada?</div>
					<div>
						Canadian universities provide co-operative or co-op programs where students
						get the chance to work in an industry related to their field. These programs
						are very popular with the students as they are able to blend studying with
						valuable work experience.
					</div>
					<div>
						Canada’s work regulations are extremely favorable for international students
						and provide them with an opportunity to work for up to 20 hours every week
						during their semesters and full-time during the summer and winter breaks.
						Students only require their study permit and not a special work permit to
						work on-campus or as an intern in any company.
					</div>
					<div className="bol ques">
						What are the immigration opportunities in Canada?
					</div>
					<div>
						Canada’s Post-Graduation Work Permit Program (PWPP) allows students to stay
						and work in Canada for up to three years after completion of their
						graduation. This helps them gain some international work experience and they
						can apply for permanent residency later on.
					</div>
					<div className="bol ques">
						What is the Application Procedure for Canadian Universities?
					</div>
					<div>
						The <span className="bol">Fall intake </span>or semester in Canada begins in{' '}
						<span className="bol">September</span>. University deadlines for the
						September intake vary from institution to institution, though are generally
						from <span className="bol"> mid December to the end of March</span>.
						Colleges may have a rolling admission policy and will accept applications
						while processing time still permits.
						<br /> <br />
						Students applying to a university or college in Ontario need to submit their
						applications through a central application centre,{' '}
						<span className="bol">
							The Ontario Universities Application Centre (OUAC)
						</span>
						. Some Ontario colleges have applications that can be submitted directly to
						the institute itself.
					</div>
					<div className="bol ques">
						Which documents are required for applying to Canadian Universities?
					</div>
					<div>
						Students will need the following documents for applying to Canadian
						Universities:
						<ul>
							<li>High school transcripts and predicted grades</li>
							<li>Letters of Recommendation (LOR)</li>
							<li>Standardized test score </li>
							<li>Statements of Purpose (SOP)</li>
						</ul>
						Once the universities receive the application, they will contact the
						students in case of any additional requirements.
					</div>
				</div>
			</div>
		);
	}
}
export default Can;
