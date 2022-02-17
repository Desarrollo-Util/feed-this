import clsx from 'clsx';
import { ComponentProps, FC } from 'react';
import styles from './Button.module.css';

type BUTTON_KINDS = 'primary' | 'secondary' | 'success' | 'error';

const BUTTON_STYLES: Record<BUTTON_KINDS, string> = {
	primary: styles.primary,
	secondary: styles.secondary,
	success: styles.success,
	error: styles.error,
};

type Props = {
	kind: BUTTON_KINDS;
	className?: string;
	fullWidth?: boolean;
};

const Button: FC<Props & ComponentProps<'button'>> = ({
	children,
	kind,
	disabled,
	className,
	fullWidth = false,
	...props
}) => {
	const css = clsx(
		styles.button,
		disabled ? styles.disabled : BUTTON_STYLES[kind],
		{
			[styles.fullWidth]: fullWidth,
		},
		className
	);

	return (
		<button className={css} disabled={disabled} {...props}>
			{children}
		</button>
	);
};

export default Button;
