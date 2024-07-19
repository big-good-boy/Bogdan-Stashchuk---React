import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';

const texts = [
	'Click me!',
	'Click me please',
	'Hit me',
	'Press me',
	'Click me again',
	'Press me!!!',
];

function App() {
	const [count, setCount] = useState(0);
	const inctementCount = () => {
		setCount(count + 1);
	};

	return (
		<div className="App">
			<Counter count={count} />
			{texts.map((text, index) => (
				<Button onClick={inctementCount} text={text} key={index} />
			))}
		</div>
	);
}

export default App;
