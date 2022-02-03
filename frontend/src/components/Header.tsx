import { FC } from 'react';
import styles from './Header.module.css';
import Logo from './icons/Logo';
import UserDisplay from './UserDisplay';

const Header: FC = () => {
	return (
		<header className={styles.wrapper}>
			<Logo className={styles.logo} />
			<UserDisplay
				src='https://thispersondoesnotexist.com/image'
				name='Pablo Castellanos'
				email='pablo@pablo.com'
				reverse
			/>
		</header>
	);
};

export default Header;
