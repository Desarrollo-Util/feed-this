import clsx from 'clsx';
import { ComponentProps, FC, useState } from 'react';
import { useFormContext, Validate } from 'react-hook-form';
import Eye from './icons/Eye';
import EyeOff from './icons/EyeOff';
import styles from './InputText.module.css';

type Props = {
	label: string;
	name: string;
	required?: string | boolean;
	validate?: Validate<any> | Record<string, Validate<any>>;
} & Omit<ComponentProps<'input'>, 'type' | 'required'>;

const InputPassword: FC<Props> = ({
	name,
	label,
	className,
	required = false,
	validate,
	...inputProps
}) => {
	const [isShown, setIsShown] = useState(false);

	const { register, formState, getFieldState } = useFormContext();
	const { error } = getFieldState(name, formState);

	const css = clsx(styles.wrapper, className);
	const inputCss = clsx(styles.input, {
		[styles.borderError]: error,
	});
	const errorCss = clsx('text-sm', styles.error);

	const VisibilityComponent = isShown ? EyeOff : Eye;

	return (
		<label className={css}>
			<span className='text-sm-bold'>{label}</span>
			<input
				className={inputCss}
				type={isShown ? 'text' : 'password'}
				{...inputProps}
				{...register(name, { required, validate })}></input>
			<VisibilityComponent
				className={styles.visibilityIcon}
				onClick={() => setIsShown(!isShown)}
			/>
			{error && <span className={errorCss}>{error.message}</span>}
		</label>
	);
};

export default InputPassword;
