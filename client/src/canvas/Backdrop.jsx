import React, { useRef } from 'react';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
	const shadows = useRef();

	return (
		<AccumulativeShadows
			ref={shadows}
			temporal
			frames={40} // Increased for smoother shadow blending
			alphaTest={0.45} // Higher value for softer transitions
			scale={10} // Slightly larger for better coverage
			rotation={[Math.PI / 2, 0, 0]}
			position={[0, 0, -0.2]}>
			<RandomizedLight
				amount={4} // More light sources for softness
				radius={9} // Balanced spread
				intensity={0.6} // Reduced for a softer look
				ambient={0.3} // Adjusted for depth without over-brightening
				position={[5, 5, -10]}
			/>
			<RandomizedLight
				amount={4}
				radius={6}
				intensity={1.3} // Slightly stronger for defined shadows
				ambient={0.5}
				position={[-5, 5, -9]}
			/>
		</AccumulativeShadows>
	);
};

export default Backdrop;
