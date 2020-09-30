import React, {Component, lazy, Suspense } from 'react';
import Service from "../components/Service.jsx"
import Explore from "../components/Explore.jsx"
import Members from "../components/Members.jsx"
import Contact from "../components/Contact.jsx"
const Nav = lazy(() => import('../components/Nav.jsx'));
const Main = lazy(() => import('../components/Main.jsx'));
const About = lazy(() => import('../components/About.jsx'));
const renderNav = () => <div></div>;

class Landing extends Component {
    componentDidMount() {
		window.scrollTo(0, 0);
	}
    render() {
        return (
            <div>
                <Suspense fallback={renderNav()}>
				    <Nav />
                    <div id="main"></div>
                    <Main/>
                    <div id="about"></div>
                    <About />
                    <div id="Our Team"></div>
                    <Members />
                    <div id="service"></div>
                    <Service />
                    <div id="explore"></div>
                    <Explore />
                    <div id="contact"></div>
                    <Contact />
			    </Suspense>
            </div>
        )
    }
}

export default Landing;