import Home from "./Pages/Home/Home"
import Marketing from "./Pages/Marketing/Marketing"
import Courses from "./Pages/Courses/Courses"
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from "./ScrollToTop"
import Pricing from "./Pages/Pricing/Pricing"
import Course from './Pages/Course/Course'
import About from "./Pages/About/About"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
			<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/marketing" element={<Marketing />} />
					<Route path="/about" element={<About />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/course" element={<Course />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
