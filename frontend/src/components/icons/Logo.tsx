import { ComponentProps, FC } from 'react';

const Logo: FC<ComponentProps<'svg'>> = props => (
	<svg viewBox='0 0 40 40' {...props}>
		<path
			fill='#039FF4'
			d='M0 8a8 8 0 018-8h24a8 8 0 018 8v24a8 8 0 01-8 8H8a8 8 0 01-8-8V8z'></path>
		<path
			fill='#fff'
			d='M25.456 11.152v3.288h-6.864v3.552h5.136v3.192h-5.136V28h-4.104V11.152h10.968z'></path>
	</svg>
);

export default Logo;
