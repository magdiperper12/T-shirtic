import React from 'react';
import { useSnapshot } from 'valtio';

import state from '../store';
const Tab = ({ tab, isFilterTab, isActiveTab, handleclick }) => {
	const snap = useSnapshot(state);
	const activestyle =
		isFilterTab && isActiveTab
			? {
					backgroundColor: snap.color,
					opacity: 0.5,
			  }
			: {
					backgroundColor: 'transparent',
					opacity: 1,
			  };
	return (
		<div
			key={tab.name}
			className={`${isFilterTab ? 'rounded-full' : 'rounded-4'}`}
			onClick={handleclick}
			style={activestyle}>
			<img
				src={tab.icon}
				width={35}
				height={35}
				alt={tab.name}
				className=' cursor-pointer'
			/>
		</div>
	);
};

export default Tab;
