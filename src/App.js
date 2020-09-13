import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Components/Chat/Chat";

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<div className="app__body">
					<Sidebar />
					<Switch>
						<Route path="/room/:roomId">
							<Chat />
						</Route>
						<Route path="/room2/:roomId">
							<Chat />
						</Route>
						<Route path="/">
							<h1>Hello Madhav</h1>
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
