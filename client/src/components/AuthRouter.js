import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
// import Dashboard from './pages/Dashboard';
// import Login from './pages/Login';
import Creator from '../pages/Creator';
import TopNav from './TopNav';

const AuthRouter = () => {
	return (
		<div className="container">
			<Router>
				<TopNav/>
				<Switch>
					{/* <Route path="/login" component={Login} /> */}
					<Route path="/create" component={Creator}/>
					<Redirect to="/create"/>
				</Switch>
			</Router>
		</div>
	)
}

export default AuthRouter
