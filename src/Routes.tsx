import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomeAluno from "./pages/homeAluno/home";

function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home-aluno" element={<HomeAluno />} />
			</Routes>
		</Router>
	);
}

export default AppRoutes;
