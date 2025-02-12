import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import confige from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';

import Tab from '../components/Tab';
import ColorPicker from '../components/ColorPicker';
import FillPicker from '../components/FillPicker';
import AIpicker from '../components/AIpicker';
import CustomButton from '../components/CustomButton';

const Customizer = () => {
	const snap = useSnapshot(state);
	return (
		<AnimatePresence>
			{!snap.intro && (
				<div className='p-5'>
					<motion.div
						key='custom'
						className='absolute top-0 z-10'
						{...slideAnimation('left')}>
						<div className='flex items-center min-h-screen'>
							<div className='editortabs-container tabs'>
								{EditorTabs.map((tab) => (
									<Tab
										key={tab.name}
										tab={tab}
										handelclick={() => {}}
									/>
								))}
							</div>
						</div>
					</motion.div>
					<motion.div
						className='absolute top-5 right-5 z-10'
						{...fadeAnimation}>
						<CustomButton
							type={'filled'}
							title={'Go Back'}
							handellclick={() => (state.intro = true)}
							customStyle={'w-fit px-4 py-2.5 font-bold text-sm'}
						/>
					</motion.div>
					<motion.div
						className='absolute bottom-5 left-1/2   z-10'
						{...slideAnimation('up')}>
						<div className=' tabs flex  gap-4'>
							{FilterTabs.map((tab) => (
								<Tab
									key={tab.name}
									tab={tab}
									handelclick={() => {}}
									isFilterTab
									isActiveTab=''
									handellclick={() => {}}
								/>
							))}
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};
export default Customizer;
