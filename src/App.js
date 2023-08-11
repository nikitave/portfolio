import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import MyWorks from "./Components/MyWorks/MyWorks";
import ContactMe from "./Components/ContactMe/ContactMe";
import cn from "classnames"
import { useState } from "react";

function App() {
	const location = useLocation();
	const [color, setColor] = useState(false)
	const handleHover = (isHovered) => {
		setColor(isHovered)
	}
	return (
		<div className={cn("app", location === 'portfolio' ? "back" : '')}>
			<Header color={color} />
			<Routes>
				<Route path="/portfolio" element={<Banner />} />
				<Route path="/about-me" element={<AboutMe />} />
				<Route path="/my-works" element={<MyWorks />} />
				<Route path="contact-me" element={<ContactMe onHover={handleHover} />} />
			</Routes>
		</div>
	);
}

export default App;
