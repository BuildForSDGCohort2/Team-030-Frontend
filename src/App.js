import React from "react";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ERROR_404 from "./pages/Error_404";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route path="/login">
					<Login />
				</Route>

				<Route path="/register">
					<Register />
				</Route>

				<Route path="*">
					<ERROR_404 />
				</Route>
			</Switch>
		</Router>
	);
}
