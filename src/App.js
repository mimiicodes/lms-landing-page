import Home from "./Pages/Home"
import About from "./Pages/About"
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/about" element={<About />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
