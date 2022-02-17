import clsx from 'clsx';
import { ComponentProps, FC } from 'react';
import { useFormContext, Validate } from 'react-hook-form';
import styles from './InputText.module.css';

type Props = {
	label: string;
	name: string;
	required?: string | boolean;
	validate?: Validate<any> | Record<string, Validate<any>>;
} & Omit<ComponentProps<'input'>, 'type' | 'required'>;

const InputText: FC<Props> = ({
	name,
	label,
	className,
	required = false,
	validate,
	...inputProps
}) => {
	const { register, formState, getFieldState } = useFormContext();
	const { error } = getFieldState(name, formState);

	const css = clsx(styles.wrapper, className);
	const inputCss = clsx(styles.input, {
		[styles.borderError]: error,
	});
	const errorCss = clsx('text-sm', styles.error);

	return (
		<label className={css}>
			<span className='text-sm-bold'>{label}</span>
			<input
				className={inputCss}
				type='text'
				{...inputProps}
				{...register(name, { required, validate })}></input>
			{error && <span className={errorCss}>{error.message}</span>}
		</label>
	);
};

export default InputText;
