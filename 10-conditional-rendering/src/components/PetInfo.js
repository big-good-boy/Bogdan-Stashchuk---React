function PetInfo(props) {
	const { animal, age, hasPet } = props;
	// const text = hasPet
	// 	? `My ${animal} is ${age} years old`
	// 	: "I don't have an animal";

	// return hasPet ? (
	// 	<h1>{`My ${animal} is ${age} years old`}</h1>
	// ) : (
	// 	<h1>I don't have an animal</h1>
	// );

	return hasPet ? (
		<h1>
			My {animal} is {age} years old
		</h1>
	) : (
		<h2>I don't have an animal</h2>
	);
}

export default PetInfo;
