import React from "react";
import {Switch, Route} from "react-router-dom";
import {AuthProvider} from "../context/AuthContext";
import Chats from "./Chats";
import Login from "./Login";

function App() {
	return (
		<AuthProvider>
			<Switch>
				<Route path='/chats' component={Chats} />
				<Route path='/' component={Login} />
			</Switch>
		</AuthProvider>
	);
}

export default App;
