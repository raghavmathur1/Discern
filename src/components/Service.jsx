import React, { Component } from 'react';

class Service extends Component {
	render() {
		return (
			<div className="">
				<div className="sectionHead">
					Our Services
					<div className="line"></div>
				</div>
				<div className="points">
					{/* <div className="point">Career assessment, guidance and mentoring</div>
					<div className="point">Profile building</div>
					<div className="point">Optimal resume building</div>
					<div className="point">Essay writing and editing</div>
					<div className="point">Writing and editing Letters of Recommendation</div>
					<div className="point">Interview preparation</div>
					<div className="point">
						Applying to the right<br /> undergraduate course and college
					</div>
					<div className="point">Culture orientation</div>
					<div className="point">Visa guidance</div>
					<div className="point">Aptitude and psychometric test</div> */}
					<ol>
						<li className="point">
							Providing individualized attention to each student with specialized
							counseling and mentoring
						</li>
						<li className="point">
							Gauging the students' interests through scientific psychometric tests,
							identifying the best suited career path and appropriate undergraduate
							course and college per their interests and skills{' '}
						</li>
						<li className="point">
							Creating a personalized timeline to accommodate all application
							requirements
						</li>
						<li className="point">
							Helping students build a robust profile by providing them opportunities
							for community service, public speaking platforms and career-shaping
							internships that they may add as a snapshot of their work experience
						</li>
						<li className="point">
							Conducting brainstorming sessions with students and editing their
							college admission essays in such a way that it best protrays their
							personality and makes them stand out
						</li>
						<li className="point">
							Carefully assessing and sharing tips for the content of letters of
							recommendation (LORs) highlighting the students' achievements{' '}
						</li>
						<li className="point">
							Handholding the students through the long-drawn application process
							including reviewing the application forms{' '}
						</li>
						<li className="point">Preparing students for the rigour of the college interview process</li>
						<li className="point">Providing guidance with respect to the Visa process</li>
						<li className="point">
							Ensuring that students have a smooth transition into their new lives by
							arranging cultural orientation activities
						</li>
					</ol>
				</div>
			</div>
		);
	}
}

export default Service;
