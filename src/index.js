import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Country from './pages/Country.jsx';

ReactDOM.render(
	<Router>
		<Route exact path="/" component={App}></Route>
		<Route exact path="/US" component={() => <Country count={1}/>} ></Route>
		<Route exact path="/Uk" component={() => <Country count={2}/>} ></Route>
		<Route exact path="/Can" component={() => <Country count={3}/>} ></Route>
	</Router>,
	document.getElementById('root')
);
