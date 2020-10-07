import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ukback from '../images/united.jpg';
var sty = {
	backgroundImage: `url(${ukback})`,
	backgroundPosition: `bottom`,
	backgroundSize: `cover`,
};
class Uk extends Component {
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
					United Kingdom
					<div className="line"></div>
				</div>
				<div className="ltext">
					<div>
						Education opens several doors of opportunities for students. However, one
						needs to know which door to enter. Education in the UK is just that and
						paves the way for multiple opportunities for students. The UK is home to
						some of the best universities in the world, including Cambridge and Oxford.
						No wonder, some of the greatest minds in history such as Mahatma Gandhi,
						Albert Einstein, J.R.R Tolkien, Adam Smith and Mansoor Ali Khan Pataudi have
						been educated in the UK. <br />
						<br />A rich multicultural population, high quality of education that is
						respected the world over and financial advantages due to the shorter
						duration of courses have all contributed to the UK consistently topping the
						world university rankings.
					</div>
					<div className="ff">
						<div className="bol cen">UK General Climate</div>
						<ul>
							<li>Daytime summer temperatures: 18 - 25°C in England</li>
							<li>Winter temperatures: 0°C - 7°C</li>
							<li>
								Spring: Weather varies from warm and sunny to cold and rainy. The
								temperatures range from 6°C - 18°C
							</li>
							<li>Autumn: Rainy with temperatures ranging from 10°C - 20°C.</li>
						</ul>
					</div>
					<div className="ff">
						<div className="bol cen">UK Fun Fact</div>
						The Britons have repeatedly and unanimously voted for chicken tikka masala
						as their favorite food over fish and chips! This is a testimony to how well
						the UK has embraced its mixed ethnic population.
					</div>
					<div className="bol ques">
						Does the UK Provide Affordable Quality Education?
					</div>
					<div>
						UK universities have a reputation for world-class research. They provide
						immense opportunities to students to hone their skills, knowledge, critical
						thinking abilities and build connections to accelerate their careers.
					</div>
					<div>
						Courses in UK universities are generally shorter than other countries,
						helping to reduce overall tuition fees and accommodation costs. This makes
						it a top choice for international students.
					</div>
					<div>
						<span className="bol">Note:</span> International students
						<span className="bol"> enrolled in a full-time course</span> in the UK are
						eligible to receive free medical treatment by the National Health Service
						(NHS) upon paying a nominal International Health Surcharge (IHS)
					</div>
					<div className="bol ques">Can you work while you study in the UK?</div>
					<div>
						As a part of the curriculum, courses in UK universities offer job placements
						and internships to students related to their courses. This helps the
						students blend studying with valuable work experience.
					</div>
					<div>
						UK’s work regulations are extremely favorable for international students and
						provide them with an opportunity to work for up to 20 hours every week
						during their terms and full-time once the term is over.
					</div>
					<div className="bol ques">
						What are the immigration opportunities in the UK?
					</div>
					<div>
						International students have a reason to rejoice since the latest post-study
						work visa rules will allow them to stay and work in the UK for up to two
						years after completion of their graduation.
					</div>
					<div className="bol ques">
						To study in the UK, students need to apply through UCAS that allows them to
						apply to five Universities/courses.
					</div>
					<div>
						<ul>
							<li>
								For applying to Oxford, Cambridge and most medicine, veterinary and
								dentistry courses, the deadline for filling UCAS is 15th October of
								the preceding year.
							</li>
							<li>
								For all other colleges and courses, it is 15th January of the same
								year.
							</li>
						</ul>
					</div>
					<div className="bol ques">
						Which documents are required for applying to UK Universities?
					</div>
					<div>
						Students will need the following documents for applying to UK Universities:
						<ul>
							<li>High school transcripts and predicted grades</li>
							<li>Personal information</li>
							<li>Statements of Purpose (SOP)</li>
						</ul>
						Since the same UCAS application goes to all colleges along with a common
						personal statement, students need to be very careful while choosing their
						course.
					</div>
				</div>
			</div>
		);
	}
}
export default Uk;
