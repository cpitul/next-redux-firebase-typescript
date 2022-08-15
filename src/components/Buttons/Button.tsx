import { forwardRef } from 'react';

import styles from './Button.module.scss';

import Badge from '@components/Badge/Badge';
import Tooltip from '@components/Tooltip/Tooltip';
import { BadgeProp } from '@utils/declarations/types';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	simple?: boolean;
	primary?: boolean;
	secondary?: boolean;
	fullWidth?: boolean;
	tooltip?: string;
	badge?: BadgeProp;
}

const Button = forwardRef<HTMLButtonElement, React.PropsWithChildren<Props>>(
	({ children, className, tooltip, badge, simple, type, fullWidth, primary, secondary, ...rest }, ref) => {
		return (
			<button
				ref={ref}
				type={type ?? 'button'}
				className={[
					styles['button-selector'],
					simple ? styles['button-simple'] : styles['button'],
					fullWidth && 'full-width',
					primary && styles['button-primary'],
					secondary && styles['button-secondary'],
					className,
				].join(' ')}
				{...rest}
			>
				{badge && <Badge info={badge} />}
				{children}
				{tooltip && <Tooltip className={styles['tooltip']} text={tooltip} />}
			</button>
		);
	},
);

Button.displayName = 'Button';

export default Button;
