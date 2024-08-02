import styles from './TodoForm.module.css';

function TodoForm() {
	return (
		<form>
			<input type="text" placeholder="Enter new todo" />
			<button>Submit</button>
		</form>
	);
}

export default TodoForm;
