import styles from './Badge.module.scss';

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
	info: string | number;
}

const Badge: React.FC<Props> = ({ className, info, ...rest }) => {
	return (
		<div className={[styles.badge, className].join(' ')} {...rest}>
			<p>{info}</p>
		</div>
	);
};

export default Badge;
