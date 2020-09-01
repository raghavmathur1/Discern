import React, { Component } from 'react';
import Member from '../components/Member.jsx';
import neetu from '../images/neetu.jpg';
import shilpa from '../images/shilpa.jpg';
import naman from '../images/naman.jpg';
import prachi from '../images/prachi.jpg';
import anuj from '../images/anuj.jpg';
class Members extends Component {
	render() {
		return (
			<div className="images">
				<div className="li">
					<div className="bar"></div>
					<div className="members">
						<Member
							mimg={neetu}
							name="Neetu Gupta"
							post="Co-founder and Chairperson"
							text="A graduate from Sri Ram College of Commerce, Neetu has been passionate about education and ensuring that students enjoy the learning process. She spearheaded a non-profit initiative, Pride in Buying, to make a difference in the lives of the underprivileged, through a self-sustaining model based on effective recycling. She was working as a freelance consultant with various publication houses and international schools to help them make learning engaging for the students. The Discern and Learn team turns to Neetu for her vast experience in gauging a child’s unique interests and career aspirations and identifying the most suitable career path for them."
						/>
						<Member
							mimg={naman}
							name="Naman Gupta"
							post="Co-founder and Student Mentor"
							text="Naman is studying finance and accounting at the prestigious Stephen M. Ross School of Business, University of Michigan (one of the top three schools for business at the undergraduate level). He is a part of various investing, consulting and Model UN clubs on campus. He heads the marketing team for the founding chapter of the Collegiate Soccer Society and serves as the Recruiting Chairperson for Michigan’s ice carving club. Since he has been through the application process himself recently, Naman brings a hands-on perspective to the process. He applied to the top universities in the US, UK, and Singapore before selecting the Ross School of Business. He was a national-level basketball player and is always ready to talk about all things Man United."
						/>
						<Member
							mimg={prachi}
							name="Prachi Bansal"
							post="Chief Editor"
							text="Being passionate about literature and the written word, she pursued a graduate and postgraduate degree in English literature from Lady Shri Ram College. She has over 12 years of professional experience as a Senior Training and Instructional Design Consultant with Accenture Management Consulting and content writer and editor with other education technology firms. In addition to designing, writing and editing training materials for collegiate and corporate clients across the US and Europe, her professional experience included conducting a training needs analysis as well as mentoring several driven teammates from top colleges. She draws on her extensive experience to understand the students’ perspective and guides them accordingly while writing essays."
						/>
					</div>
				</div>
				<div className="li li2">
					<div className="bar"></div>
					<div className="members">
						<Member
							mimg={shilpa}
							name="Shilpa Goyal"
							post="Creative Head and Director"
							text="Shilpa identified a career path suited to her own interests and aptitude and carved a successful career thereon. She graduated from the country’s leading fashion institute, NIFT and has been engaged in creative and designing pursuits since then. Given her creative bent of mind, Shilpa brings an innovative and ingenuous approach to the whole application process and student discussions while guiding design students in creating their portfolios."
						/>
						<Member
							mimg={anuj}
							name="Anuj Agarwal"
							post="Discern and Learn Advisor"
							text="Anuj has done his Masters in Engineering Management from the prestigious Duke                             University. He has over 15 years of experience in the Financial Services sector and                             Investment Banking. In his current role as a Director at a reputed European Financial                             Services firm, Anuj goes to all the top B-schools to recruit their top students for his team                             and mentors them. Anuj guides our core counsellors."
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Members;
