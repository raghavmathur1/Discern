import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import usback from '../images/usback.jpg';
var sty = {
	backgroundImage: `url(${usback})`,
	backgroundPosition: `center`,
	backgroundSize: `cover`,
};
class Us extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.state)
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div>
				<div className="cback" style={sty}>
					<Link to="/">
						<div className="toback">Back </div>
					</Link>
				</div>
				<div className="sectionHead sp">
					United States
					<div className="line"></div>
				</div>

				<div className="ltext">
					<div className="bol cen">
						“America is the land where dreams can come true for all of us!” <br />{' '}
						Geraldine Ferraro
					</div>
					<div>
						The US is like the promised land that has always allured ambitious and
						talented students across the world for giving wings to their career
						aspirations. Top-ranking universities that enjoy an outstanding
						international reputation, a remarkable education system comprising a broad
						and unique curriculum, top-notch faculty, an inclusive and multicultural
						environment, and superabundant opportunities are just a few reasons why the
						US continues to be the most popular university destination for international
						students the world over. Moreover, international students are given a visa
						for an extended period of one year beyond the duration of their studies
						(STEM students get an extension of two years). Students can use this time to
						find their footing at some of the biggest companies.
					</div>
					<div className="ff">
						<div className="bol cen">US Fun Fact</div>
						True to its moniker, “The Land of Opportunities,” the US has the highest
						number of entrepreneurs in the world!
					</div>
					<div className="bol ques">
						What makes the US education system so remarkable?
					</div>
					<div>
						US universities are consistently ranked the highest across all courses in
						all the top global universities rankings. In comparison to other
						universities, US universities invest a large sum of money in each student.
						This in turn attracts the best teachers in the form of highly accredited
						professors and hence superlative lectures. The class size is relatively
						small, which allows the professors to nurture a dedicated academic
						relationship with their students. US universities are also equipped with the
						best libraries, sports facilities and advanced technology and research
						capabilities. Further, they use innovative teaching methods with a balance
						between theory and practice.
					</div>
					<div>
						The American education system offers immense flexibility to its students.
						The universities offer a multitude of courses within a program and the
						opportunity to change majors or opt for multiple specializations. At the
						undergraduate level, students can choose to pursue different courses before
						they declare their major at the end of the second year. They can even opt
						for a double major in Renaissance Art and Mechanical Engineering if they
						want!
					</div>
					<div className="bol ques">
						What are the different measures taken by the universities to help the
						international students blend in with the others?
					</div>
					<div>
						American Universities take immense pride in their cultural diversity. A
						typical university campus is home to students from at least 20 different
						nationalities within an area of ten square kilometer campus. To make the
						transition to US campus life smoother for undergraduate students,
						universities conduct orientation for them upon arrival. Various cultural
						clubs on campus organize several activities for the incoming batch so they
						may become familiar with the campus. Students can choose to join any of
						these clubs later. The Diwali and Eid celebrations on the campus are a sight
						to behold, which parents of students can witness virtually.
					</div>
					<div>
						Each university campus has an International Students Support Office to
						assist international students with queries regarding visa status, health
						concerns, housing, employment opportunities etc.
					</div>
					<div className="bol ques">
						What are some of the important deadlines for applying to the US
						universities?
					</div>
					<div>
						US colleges offer three intakes a year:
						<ul>
							<li>
								<span className="bol">Fall intake</span> in August: Is the most
								popular across all programs
							</li>
							<li>
								<span className="bol">Spring intake</span> in January: Recommended
								to those who miss the September intake
							</li>
							<li>
								<span className="bol">Summer intake</span> in May: Is available for
								limited courses and colleges
							</li>
						</ul>
						<div>
							For the Fall intake, students can choose from multiple deadlines,
							between October of the preceding year to January of the year of
							application.
						</div>
						<div>
							First are Early Action and Early Decision deadlines, usually early
							November. By applying early, students will hear from the university
							sooner than their peers (by mid-December). They can get a reply in
							affirmative, negative or deferment. Deferment means that their
							application will be reviewed again with regular applicants and they will
							get to know the status of their application in March or early April.
						</div>
						<div>
							As opposed to EA, ED acceptances are binding, so students need to be
							very sure before making this application. Some schools also offer a
							second Early Decision application option, ED II, usually in January,
							which is also binding.
						</div>
						<div>
							<span className="bol">A regular decision application</span> is the third
							option, with deadlines between 1-15 january in different universities.
							Regular decision applicants generally hear back from schools between
							mid-March to early April.
						</div>
					</div>
					<div className="bol ques">
						What is the Application Procedure for the US Universities?
					</div>
					<div>
						Students may choose any of the following applications depending on the
						university of their choice:
						<ul>
							<li>
								<span className="bol">The Common Application:&nbsp;</span>
								It is the most popular application platform for American
								universities since it is accepted by more than 750 schools. Students
								fill out the Common Application once and can then submit it to
								multiple colleges, along with additional requirements that
								individual colleges may have.
							</li>
							<li>
								<span className="bol">The Coalition Application:&nbsp;</span>
								It is a newer platform accepted by more than 150 schools with more
								schools being added every year.
							</li>
							<li>
								<span className="bol">
									The Universal College Application:&nbsp;
								</span>
								It is accepted by 23 schools.
							</li>
							<li>
								<span className="bol">
									School- or university system-specific applications:&nbsp;
								</span>
								An example is the University of California system, which has its own
								application. It is the only platform accepted by UC schools and
								students can apply to multiple campuses with one application.
							</li>
						</ul>
					</div>
					<div className="bol ques">
						What are the requirements for applying to US colleges?
					</div>
					<div>
						<ul>
							<li>
								<span className="bol">The College Application Essay:&nbsp;</span>
								As part of the application process, most colleges require students
								to submit at least one writing sample, the college essay. Students
								will usually have multiple essay prompts to choose from, all of
								which are very open ended. This gives students a lot of room on how
								to portray themselves as a candidate.
							</li>
							<li>
								<span className="bol">Additional essays: &nbsp;</span>
								Individual colleges or universities that a student is applying to
								usually require additional essays. So students may need to factor in
								the time for writing more essays.
							</li>
							<li>
								<span className="bol">Standardized test scores:&nbsp;</span>
								Most schools require applicants to submit SAT, SAT subject test or
								ACT scores. International students also need to clear an English
								proficiency test, such as TOEFL, IELTS, PTE or Duolingo with minimum
								score requirements as stipulated by individual schools.
							</li>
							<li>
								<span className="bol">Letters of Recommendation:&nbsp;</span>
								Colleges often ask students to submit three letters of
								recommendations (LORs) from their teachers and counselor.
							</li>
							<li>
								<span className="bol">Activities Section:&nbsp;</span>
								Information about extracurricular activities, work experience,
								community service, awards and academic writing make this section
								crucial to the application. US universities look for candidates who
								stretch themselves beyond the classroom, students who demonstrate
								leadership, community spirit, and perseverance not just through
								academics, but through extracurricular activities, voluntary or
								charitable initiatives undertaken, and work experience. For this
								reason, building an impressive profile is of paramount importance to
								secure admission in a good college.
							</li>
							<li>
								<span className="bol">
									Personal information and high school transcript&nbsp;
								</span>
								form other sections of the college application.
							</li>
						</ul>
						Note: Students generally have until May 1 to decide which school they will
						attend and pay an enrollment deposit.
					</div>
				</div>
			</div>
		);
	}
}
export default Us;
