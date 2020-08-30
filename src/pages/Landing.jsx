import React, {Component, lazy, Suspense } from 'react';
const Nav = lazy(() => import('../components/Nav.jsx'));
const renderNav = () => <div></div>;
const Main = lazy(() => import('../components/Main.jsx'));
const About = lazy(() => import('../components/About.jsx'));


class Landing extends Component {
    render() {
        return (
            <div>
                <Suspense fallback={renderNav()}>
				    <Nav />
                    <Main />
                    <About />
			    </Suspense>
            </div>
        )
    }
}

export default Landing;