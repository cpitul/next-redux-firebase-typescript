import styles from './Tooltip.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	text: string;
}

const Tooltip: React.FC<Props> = ({ text, className, ...rest }) => {
	return (
		<div className={[styles.tooltip, className].join(' ')} {...rest}>
			<p>{text}</p>
		</div>
	);
};

export default Tooltip;
