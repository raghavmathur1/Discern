import React, { Component } from 'react';
import indback from '../images/indback.jpg';
import Nav from '../components/Nav.jsx';
var sty = {
	backgroundImage: `url(${indback})`,
	backgroundPosition: `center`,
	backgroundSize: `cover`,
};
class Ind extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div>
				<div className="cback" style={sty}>
					<div className="toback">Back</div>
				</div>
				<div className="sectionHead sp">
					India
					<div className="line"></div>
				</div>
				<div className="ltext">
					<div>
						India has an academic-oriented education system that is largely theoretical
						in its approach. Despite Cricket being a religion in India and Indians being
						obsessed with the Bollywood film industry, sports and co-curricular
						activities such as performing arts have not been given the kind of
						importance that they deserve at school or college-level. Fortunately, there
						is light at the end of the tunnel! The New Education Policy 2020 is being
						heralded as a long overdue overhaul that the Indian Education system needs.
						It places sports, co-curricular activities and vocational courses at par
						with academics, and offers flexibility at least at school level. However, it
						will be some time before the reforms are implemented completely.
					</div>
					<div className="ff">
						<div className="bol cen">India Fun Fact</div>
						After the USA, India has the maximum number of English-speaking people (125
						million approximately), which is expected to grow tremendously in the coming
						years.
					</div>
					<div className="bol ques">Does India provide quality education?</div>
					<div>
						Unfortunately, the current education system in India offers students no
						flexibility with respect to changing their major, pursue a double major or
						just study subjects from different fields in college. Therefore, students
						looking for a more diverse and engaging curriculum continue to opt for
						higher education in the US.
					</div>
					<div className="bol ques">
						Do any Indian universities offer an education experience similar to the
						west?
					</div>
					<div>
						In recent years, a few Liberal Arts universities such as Ashoka, Flame and
						O.P. Jindal University have made a name for themselves as an alternative to
						the universities in the West. These universities have a more exploratory
						approach with a diverse range of courses on offer. Their curriculum is
						research-based, comprehensive and well-rounded. They also have alliances
						with some of the best universities of the world and are highly competitive.
					</div>
					<div className="bol ques">Can you work while you study in India?</div>
					<div>
						The Indian visa system currently does not allow work permits for
						international students, which means that they cannot work off-campus.
						However, this rule is not applicable for Overseas Citizens of India (OCI)
						and Persons of Indian Origin (PIO) as they can work and study in India.
					</div>
					<div className="bol ques">
						Which documents are required for applying to Liberal Arts Universities in
						India?
					</div>
					<div>
						Students will need the following documents for applying to the Indian
						Universities listed above:
						<ul>
							<li>Completely filled application form </li>
							<li>High school transcripts </li>
							<li>Letters of Recommendation (LOR)</li>
							<li>Statements of Purpose (SOP)</li>
							<li>
								Scores of Standardized Aptitude Tests or Aptitude Test held by
								university
							</li>
						</ul>
						The minimum subject score requirement varies from course to course. Apart
						from academic scores, these universities also take students’ extracurricular
						activities and portfolio into consideration for admission.
					</div>
				</div>
			</div>
		);
	}
}
export default Ind;
