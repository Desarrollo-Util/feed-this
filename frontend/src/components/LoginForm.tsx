import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Button from './Button';
import InputPassword from './InputPassword';
import InputText from './InputText';
import styles from './LoginForm.module.css';

type LoginFormInput = {
	email: string;
	password: string;
};

const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginForm: FC = () => {
	const methods = useForm<LoginFormInput>({});

	const onSubmit: SubmitHandler<LoginFormInput> = async ({
		email,
		password,
	}) => {
		const response = await fetch('http://localhost:4000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			// TODO Tratar el error
		} else {
			// TODO Generar un estado de autenticación.
			localStorage.setItem('jid', data.token);
		}
	};

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Iniciar sesión</h1>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
					<div className={styles.inputs}>
						<InputText
							label='Email'
							placeholder='Tu email'
							name='email'
							required='Completa el email'
							validate={{
								email: v => EMAIL_REGEX.test(v) || 'El email no es válido',
							}}
						/>
						<InputPassword
							label='Contraseña'
							placeholder='Tu contraseña'
							name='password'
							required='Completa la contraseña'
						/>
					</div>
					<Button kind='primary' fullWidth>
						Iniciar sesión
					</Button>
				</form>
			</FormProvider>
		</div>
	);
};

export default LoginForm;
