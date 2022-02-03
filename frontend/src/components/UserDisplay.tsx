import { FC } from 'react';
import RoundedPic from './RoundedPic';
import styles from './UserDisplay.module.css';

type Props = {
	src: string;
	name: string;
	email: string;
	reverse?: boolean;
};

const UserDisplay: FC<Props> = ({ src, name, email, reverse = false }) => {
	const wrapperClassname = reverse ? styles.wrapperReverse : styles.wrapper;
	const namesClassname = reverse ? styles.namesReverse : styles.names;

	return (
		<div className={wrapperClassname}>
			<RoundedPic src={src} />
			<div className={namesClassname}>
				<span>{name}</span>
				<span className='text-sm'>{email}</span>
			</div>
		</div>
	);
};

export default UserDisplay;
