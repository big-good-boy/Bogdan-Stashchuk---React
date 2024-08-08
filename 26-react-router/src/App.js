import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="*" element={<h1>Not Found</h1>}></Route>
					<Route path="/" element={<h1>React Router</h1>}></Route>
					<Route path="about" element={<h1>About</h1>}></Route>
					<Route path="contacts" element={<h1>Contacts</h1>}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
