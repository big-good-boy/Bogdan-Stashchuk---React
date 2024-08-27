const initialState = [];

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_NAME':
			return [...state, action.payload];
		case 'DELETE_NAME':
			return state.filter((personName) => personName !== action.payload);
		case 'CLEAR_NAMES':
			return [];
		default:
			return state;
	}
}

let newState = reducer(initialState, { type: 'ADD_NAME', payload: 'Bogdan' });
console.log(newState); // [ 'Bogdan' ]

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Alice' });
console.log(newState); // [ 'Bogdan', 'Alice' ]

newState = reducer(newState, { type: 'DELETE_NAME', payload: 'Alice' });
console.log(newState); // [ 'Bogdan' ]

newState = reducer(newState, { type: 'CLEAR_NAMES' });
console.log(newState); // []

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Alice' });
console.log(newState); // [ 'Alice' ]

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Bogdan' });
console.log(newState); // [ 'Alice', 'Bogdan' ]
