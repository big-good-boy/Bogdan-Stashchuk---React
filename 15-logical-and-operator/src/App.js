import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import ResetButton from './components/ResetButton';

function App() {
	const [count, setCount] = useState(0);
	const inctementCount = () => {
		setCount(count + 1);
	};

	const resetCount = () => {
		setCount(0);
	};

	return (
		<div className="App">
			<Counter count={count} />
			<Button onClick={inctementCount} />
			<Button onClick={inctementCount} />
			<Button onClick={inctementCount} />
			<Button onClick={inctementCount} />
			{count > 0 && <ResetButton resetCount={resetCount} />}
		</div>
	);
}

export default App;
