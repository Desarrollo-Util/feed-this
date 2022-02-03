import { FC } from 'react';
import styles from './InputText.module.css';

type InputTextProps = {
	label: string;
	placeholder: string;
	defaultValue?: string;
};

const InputText: FC<InputTextProps> = ({
	label,
	placeholder,
	defaultValue,
}) => {
	return (
		<div className={styles.inputText_wrapper}>
			<label className={`${styles.inputText_label} text-sm-bold`}>
				{label}
			</label>
			<input
				className={styles.inputText}
				type='text'
				placeholder={placeholder}
				defaultValue={defaultValue}></input>
		</div>
	);
};

export default InputText;
