import { FC, useContext } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { loginRequest } from '../lib/api/login.request';
import { profileRequest } from '../lib/api/profile.request';
import { AuthContext } from '../lib/contexts/auth.context';
import { emailValidation } from '../lib/validations/form-validations';
import Button from './Button';
import InputPassword from './InputPassword';
import InputText from './InputText';
import styles from './LoginForm.module.css';

type LoginFormInput = {
	email: string;
	password: string;
};

const LoginForm: FC = () => {
	const methods = useForm<LoginFormInput>({});

	const { login } = useContext(AuthContext);

	const onSubmit: SubmitHandler<LoginFormInput> = async ({
		email,
		password,
	}) => {
		const loginResponse = await loginRequest(email, password);

		if (loginResponse.error) {
			// TODO Tratar el error
			console.error(loginResponse.error);
			return;
		}

		const profileResponse = await profileRequest(loginResponse.data);

		if (profileResponse.error) {
			// TODO Tratar el error
			console.error(profileResponse.error);
			return;
		}

		login(loginResponse.data, profileResponse.data);
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
								// TODO: Quitar string mágico
								email: v => emailValidation(v) || 'El email no es válido',
							}}
						/>
						<InputPassword
							label='Contraseña'
							placeholder='Tu contraseña'
							name='password'
							// TODO: Quitar string mágico
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
