import { FC, useContext } from 'react';
import { AuthContext } from '../lib/contexts/auth.context';
import styles from './Header.module.css';
import Logo from './icons/Logo';
import UserDisplay from './UserDisplay';

const Header: FC = () => {
	const { auth } = useContext(AuthContext);

	return (
		<header className={styles.wrapper}>
			<Logo className={styles.logo} />
			{auth?.user && (
				<UserDisplay
					src={
						auth.user.profilePic ||
						`https://avatars.dicebear.com/api/initials/${auth.user.name
							.toLowerCase()
							.replaceAll(' ', '-')}.svg`
					}
					name={auth.user.name}
					email={auth.user.email}
					reverse
				/>
			)}
		</header>
	);
};

export default Header;
