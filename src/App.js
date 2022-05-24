import Home from "./Pages/Home/Home"
import About from "./Pages/About"
import Marketing from "./Pages/Marketing/Marketing"
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
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
