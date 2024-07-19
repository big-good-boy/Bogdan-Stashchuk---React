import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';

function App() {
	const [count, setCount] = useState(0);
	const inctementCount = () => {
		setCount(count + 1);
	};

	return (
		<div className="App">
			<Counter count={count} />
			<Button onClick={inctementCount} />
			<Button onClick={inctementCount} />
			<Button onClick={inctementCount} />
			<Button onClick={inctementCount} />
		</div>
	);
}

export default App;
