import React, { Component } from 'react';
import eurback from '../images/eurasia.jpg';
import { Link } from 'react-router-dom';
var sty = {
	backgroundImage: `url(${eurback})`,
	backgroundPosition: `bottom`,
	backgroundSize: `cover`,
};
class Eur extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div>
				<div className="cback" style={sty}>
					<Link to="/">
						<div className="toback">Back to home</div>
					</Link>
				</div>
				<div className="sectionHead sp">
					Eurasia
					<div className="line spa"></div>
				</div>
				<div className="ltext">
					<div>
						Europe and Central Asia or the ECA region forms a fascinating potpourri of
						cultures, ethnicities and languages that constitute a rich learning
						environment for language, social, historical, political or economic studies.
						<br />
						<br />
						A few countries in the ECA region such as Russia, Poland, the Czech Republic
						and Kyrgyzstan are very popular among international students as attractive
						education destinations. Several universities in these countries are approved
						by the Medical Council of India (MCI) and hence, Indian students seeking to
						pursue Medicine often choose to study here as the admission requirements are
						few and quite simple.
						<br />
						<br />
						Many top universities in countries like Russia, Poland, the Czech Republic,
						Hungary, Lithuania and Romania offer courses taught in the English language.
						This draws international students to pursue studies in the ECA region.
					</div>
					<div className="ff">
						<div className="bol cen">Eurasia Fun Fact</div>
						If you are an international student who is planning to study in the Czech
						Republic, you might want to consider learning the Czech language before you
						enroll in a course because those who speak Czech are exempt from any tuition
						fees for all Czech-language programmes, regardless of their country of
						origin!
					</div>
					<div className="bol ques">
						Do universities in the ECA region provide quality education?
					</div>
					<div>
						The universities in the ECA region are equipped with world-class research
						centers and higher education institutions that provide high-quality
						education at exceptionally affordable costs. These universities provide
						courses at Bachelor, Masters and Doctorate level in a wide variety of fields
						such as Medicine, Public Relation, Business, Teaching, Nursing, and
						Information Technology. They offer Engineering degrees in a gamut of fields
						such as Civil, Mechanical, Automotive, Aerospace, Artificial Intelligence,
						Telecommunications, Design, Digital Marketing, Biotechnology and
						Pharmaceutical Sciences.
						<br />
						<br />
						The universities in the ECA region design their study programs to suit the
						international students and include provisions for co-op and paid work
						placements.
					</div>
					<div className="bol ques">Can you work while you study in the ECA region?</div>
					<div>
						Studying in the ECA region is extremely cost-effective for international
						students because almost everything, including the cost of living and the
						tuition fees, costs a fraction of what it does in the rest of Europe and the
						US. Moreover, the work regulations in most of the ECA region are extremely
						favorable for international students and provide them with an opportunity to
						work part time while studying to cover their living expenses.
						<br />
						<br />
						Students can work upto <span className="bol">20 hours every week</span>{' '}
						during their semesters and for{' '}
						<span className="bol">40 hours during holidays or scheduled breaks</span>.
						Infact, per the latest regulations in Russia, international students only
						need a written confirmation from their university to show that they are
						enrolled in a course to take up a part-time job. It doesn't get easier than
						that!
					</div>
					<div className="bol ques">
						What are the immigration opportunities in the ECA region?
					</div>
					<div>
						Students can avail the opportunity of staying back to work in the ECA region
						for up to 24 months right after the completion of their study program. This
						helps them gain some international work experience.
					</div>
					<div className="bol ques">
						What are the Application Procedure and admission requirements for
						Universities in the ECA region?
					</div>
					<div>
						If you are looking for options of universities abroad where the admission
						process is relatively less stressful, you need to look no further. Many
						universities in the ECA region have no entrance exams, and to gain admission
						you will need:
						<ul>
							<li>Completely filled application form</li>
							<li>High school transcripts with strong grades</li>
							<li>Two Letters of Recommendation (LOR)</li>
							<li>Statements of Purpose (SOP)</li>
							<li>
								TOEFL/IELTS/PTE Exam Score Xerox (only if the medium of education is
								NOT English)
							</li>
							<li>Proof of funds</li>
						</ul>
						{/* The minimum subject score requirement varies from course to course. Apart
						from academic scores, a few universities also take students’ extracurricular
						activities and portfolio into consideration for admission. */}
					</div>
				</div>
			</div>
		);
	}
}
export default Eur;
