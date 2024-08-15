import { useContext } from 'react';
import UserContext from '../context/UserContext';

const ChangeUser = () => {
	const { userName, changeUserName } = useContext(UserContext);

	return (
		<button
			onClick={() => changeUserName(userName === 'Bogdan' ? 'Alice' : 'Bogdan')}
		>
			Change User
		</button>
	);
};

export default ChangeUser;
