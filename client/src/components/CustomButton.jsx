import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';
const CustomButton = ({ type, customStyle, title, handellclick }) => {
	const snap = useSnapshot(state);

	const generateStyle = (type) => {
		if (type === 'filled') {
			return {
				backgroundColor: snap.color,
				color: '#fff',
			};
		}
	};

	return (
		<button
			className={`${customStyle} cursor-pointer rounded-md`}
			onClick={handellclick}
			style={generateStyle(type)}>
			{title}
		</button>
	);
};

export default CustomButton;
