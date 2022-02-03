import { ComponentProps, FC } from 'react';
import styles from './RoundedPic.module.css';

type Props = {
	src: string;
	alt?: string;
} & ComponentProps<'img'>;

const RoundedPic: FC<Props> = ({ src, ...props }) => {
	return <img className={styles.img} src={src} {...props} />;
};

export default RoundedPic;
