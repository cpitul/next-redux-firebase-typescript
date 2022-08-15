import { default as NextLink, LinkProps } from 'next/link';
import { forwardRef } from 'react';

import styles from './Button.module.scss';

import Badge from '@components/Badge/Badge';
import Tooltip from '@components/Tooltip/Tooltip';
import { BadgeProp } from '@utils/declarations/types';

interface Props extends LinkProps {
	button?: boolean;
	underline?: boolean;
	className?: string;
	fullWidth?: boolean;
	primary?: boolean;
	secondary?: boolean;
	tooltip?: string;
	badge?: BadgeProp;
}

const Link = forwardRef<HTMLAnchorElement, React.PropsWithChildren<Props>>(
	({ children, tooltip, badge, underline, fullWidth, className, button, primary, secondary, href, ...rest }, ref) => {
		return (
			<NextLink href={href} passHref>
				<a
					ref={ref}
					style={{ textDecoration: underline ? 'underline' : 'none' }}
					className={[
						styles['button-selector'],
						button && styles['button'],
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
				</a>
			</NextLink>
		);
	},
);

Link.displayName = 'Link';

export default Link;
