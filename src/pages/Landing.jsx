import React, {Component, lazy, Suspense } from 'react';
import Service from "../components/Service.jsx"
import Explore from "../components/Explore.jsx"
const Nav = lazy(() => import('../components/Nav.jsx'));
const Main = lazy(() => import('../components/Main.jsx'));
const About = lazy(() => import('../components/About.jsx'));
const renderNav = () => <div></div>;

class Landing extends Component {
    render() {
        return (
            <div>
                <Suspense fallback={renderNav()}>
				    <Nav />
                    <div id="main"></div>
                    <Main/>
                    <div id="about"></div>
                    <About />
                    <div id="service"></div>
                    <Service />
                    <div id="explore"></div>
                    <Explore />
			    </Suspense>
            </div>
        )
    }
}

export default Landing;