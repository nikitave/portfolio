import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import MyWorks from "./Components/MyWorks/MyWorks";
import ContactMe from "./Components/ContactMe/ContactMe";
import cn from "classnames";
import { useState } from "react";
import Main from "./Components/Main/Main";


function App() {
	const location = useLocation();
	const [color, setColor] = useState(false);
	const handleHover = (isHovered) => {
		setColor(isHovered);
	};

	const [colorTwo, setColorTwo] = useState(false);
	const handleHoverTwo = (isHoveredTwo) => {
		setColorTwo(isHoveredTwo);
	};
	return (
		<div className={cn("app", location === "portfolio" ? "back" : "")}>
			<Header color={color} colorTwo={colorTwo} />
			<Routes>
				<Route path="/portfolio" element={<Main />} />
				<Route path="/about-me" element={<AboutMe onHover={handleHoverTwo} />} />
				<Route path="/my-works" element={<MyWorks />} />
				<Route
					path="contact-me"
					element={<ContactMe onHover={handleHover} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
