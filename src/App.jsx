import React, { lazy, Suspense } from 'react';
import './App.css';

const LandingComponent = lazy(() => import('./pages/Landing.jsx'));
const renderLanding = () => <div></div>;
// import Landing from './components/Landing.jsx';

function App() {
	return (
		<div>
			<Suspense fallback={renderLanding()}>
				<LandingComponent />
			</Suspense>
		</div>
	);
}

export default App;
