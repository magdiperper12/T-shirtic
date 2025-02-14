import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import {
	headContainerAnimation,
	headTextAnimation,
	headContentAnimation,
	slideAnimation,
} from '../config/motion';

import state from '../store';
import CustomButton from '../components/CustomButton';
const Home = () => {
	const snap = useSnapshot(state);
	return (
		<AnimatePresence>
			{snap.intro && (
				<motion.section
					className='p-4'
					{...slideAnimation('left')}>
					<motion.header {...slideAnimation('down')}>
						<img
							src='./threejs.png'
							alt='logo'
							className='w-8 h-8 object-contain'
						/>
					</motion.header>

					<motion.div {...headContainerAnimation}>
						<motion.div {...headTextAnimation}>
							<h1 className='font-bold text-9xl'>
								{"LET'S"}
								<br className='hidden xl:block' />
								DO IT
							</h1>
						</motion.div>
						<motion.div
							{...headContentAnimation}
							className='flex flex-col gap-5 items-start'>
							<p className='max-w-md font-normal text-base text-gray-600'>
								Creat your uniqe and exclusive shirt with our brand-new 3D
								customization tool <strong>and defined your own style</strong>
							</p>
							<CustomButton
								type='filled'
								customStyle='px-4 bg-green-500 py-2.5 font-bold text-sm'
								title='Customize It'
								handellclick={() => (state.intro = false)}
							/>
						</motion.div>
					</motion.div>
				</motion.section>
			)}
		</AnimatePresence>
	);
};

export default Home;
