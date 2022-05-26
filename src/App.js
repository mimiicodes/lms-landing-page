import Home from "./Pages/Home/Home"
import About from "./Pages/About"
import Marketing from "./Pages/Marketing/Marketing"
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from "./ScrollToTop"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
			<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/marketing" element={<Marketing />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
