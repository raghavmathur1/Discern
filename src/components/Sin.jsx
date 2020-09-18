import React, { Component } from 'react';
import eurback from '../images/eurasia.jpg'
import Nav from '../components/Nav.jsx'	
var sty = {
    backgroundImage: `url(${eurback})`,
    backgroundPosition: `bottom`,
    backgroundSize: `cover`
}
class Sin extends Component {
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
					Singapore
					<div className="line spa"></div>
				</div>
				<div className="ltext">
					<div>
						What do you call a country that is the greenest city in Asia, amongst the
						cleanest, safest, least corrupt countries in the world and is also a world
						leader in research and innovation? Although it sounds like a Utopia,
						Singapore offers you all this and more!!
						<br />
						<br />
						The vibrant and cosmopolitan city of Singapore is home to a rich
						multicultural population (Indians form one of the four main ethnic groups in
						Singapore), boasts of excellent public transportation facilities, and
						provides quality education that is extremely affordable yet respected the
						world over, resulting in great job opportunities.
						<br />
						<br />
						Most Singaporeans speak and understand the English language, which makes it
						easier for the international students to blend in with the local students.
						No wonder, international students flock to Singapore, making it a global
						education as well as business hub.
					</div>
					<div className="ff">
						<div className="bol cen">Singapore General Climate</div>
						<div>
							Being situated close to the Equator, Singapore has a typical tropical
							climate that does not see a lot of variation. It has only two seasons,
							wet and dry. Singapore has high temperature, rainfall and humidity all
							year round
						</div>
						<ul>
							<li>Daytime temperature: 32°C </li>
							<li>Nighttime temperature: 23°C </li>
						</ul>
					</div>
					<div className="ff">
						<div className="bol cen">Singapore Fun Fact</div>
						17% of the population or one in every six people in Singapore have assets
						over 1 million, which is the highest in the world. So, if you want to mint
						money, you know where you should be headed!
					</div>
					<div className="bol ques">
						Does Singapore Provide Affordable Quality Education?
					</div>
					<div>
						Singapore has numerous good universities with two of them (Nanyang
						Technological University (NTU) and National University of Singapore (NUS)
						being ranked amongst the world's top 20 universities. <br />
						<br />
						These universities offer state-of-the-art infrastructure, distinguished
						faculty, industry-oriented programs as well as strong industry connections
						leading to financial advantages and more opportunities for internships and
						job opportunities for international students. <br />
						<br />
						Although Singapore is one of the most expensive cities in the world,
						studying in Singapore is cheaper than other popular overseas study
						destinations including US and UK both in terms of cost of living and tuition
						fee. Moreover, since Singapore is closer to India, it reduces the overall
						traveling costs for Indian students as well.
					</div>
					<div className="bol ques">Can you work while you study in Singapore?</div>
					<div>
						Singapore work regulations are extremely favorable for international
						students and provide them with an opportunity to work for<span className="bol"> up to 16 hours </span>
						every week during their <span className="bol">terms</span> and<span className="bol"> unlimited hours</span> once the term is over.
						<br />
						<br />
						<span className="bol">Note:</span> Students may avail this facility only if their university supports a
						part-time work programme
					</div>
					<div className="bol ques">
						What are the immigration opportunities in Singapore?
					</div>
					<div>
						After graduating from the university, if international students do not
						secure a job immediately, they may apply for a <span className="bol">Long-Term Visit Pass</span> that
						enables them to stay in Singapore for another year without a job. If
						students secure a job within a year of applying for a Long-Term Visit Pass,
						they are issued a <span className="bol">Work Pass </span>that allows them to work in Singapore.
					</div>
					<div className="bol ques">
						What is the Application Procedure for Singapore Universities?
					</div>
					<div>
						Admission to these coveted universities is quite competitive. Each
						university has a different set of admission requirements. Most colleges in
						Singapore accept applications through their Website. Typically, applications
						for admissions open in <span className="bol">October</span> & need to be submitted by February or March.
					</div>
					<div className="bol ques">
						What are the requirements for applying to Singapore Universities?
					</div>
					<div>
						Students need to submit the following documents for applying to Singapore
						Universities:
						<ul>
							<li>High school transcripts and predicted grades</li>
							<li>Personal information</li>
							<li>Statements of Purpose (SOP)</li>
							<li>Two Letters of Recommendation (LOR)</li>
							<li>Score reports of IELTS / TOEFL / PTE</li>
							<li>
								Certificates for state and national-level competitions and other
								extracurricular activities
							</li>
							<li>Proof of funds</li>
						</ul>
						<span className="bol">Note:</span> Students applying for art and design courses and architecture
						programmes need to submit their design portfolios as well.
					</div>
				</div>
			</div>
		);
	}
}
export default Sin;
