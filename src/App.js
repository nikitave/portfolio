import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import MyWorks from "./Components/MyWorks/MyWorks";
import ContactMe from "./Components/ContactMe/ContactMe";

function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path="/portfolio" element={<Banner />} />
				<Route path="/about-me" element={<AboutMe />} />
				<Route path="/my-works" element={<MyWorks />} />
				<Route path="contact-me" element={<ContactMe />} />
			</Routes>
		</div>
	);
}

export default App;
