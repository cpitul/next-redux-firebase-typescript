import { useCallback } from 'react';

import styles from './Checkbox.module.scss';

import { InputChangeEvent } from '@utils/declarations/types';

interface Props extends React.HTMLAttributes<HTMLLabelElement> {
	text: string;
	checked: boolean;
	onCheck: (e: InputChangeEvent) => void;
}

const Checkbox: React.FC<Props> = ({ className, text, checked, onCheck, ...rest }) => {
	const handleChange = useCallback(
		(e: InputChangeEvent) => {
			onCheck(e);
		},
		[onCheck],
	);

	return (
		<label className={[styles['checkbox'], className].join(' ')} {...rest}>
			<input type='checkbox' checked={checked} onChange={handleChange} />
			{text}
		</label>
	);
};

export default Checkbox;
