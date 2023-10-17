import * as Fiber from '@react-three/fiber'
import { Scroll, ScrollControls, Sky } from '@react-three/drei'
import { useState } from 'react'
import Kamishibai from './Kamishibai'

export const SCROLLABLE = 5
export default () => {
	return (
		<div className="whitespace-nowrap" style={{ width: '100%', height: '100vh' }}>
			<Fiber.Canvas shadows camera={{ position: [0, 0, 10] }}>
				<ambientLight intensity={0.03} />
				<fog attach="fog" args={['#ff5020', 5, 18]} />
				<spotLight
					angle={0.14}
					color="#ffd0d0"
					penumbra={1}
					position={[25, 50, -20]}
					shadow-mapSize={[2048, 2048]}
					shadow-bias={-0.0001}
					castShadow
				/>
				<Sky sunPosition={[2, 0.4, 10]} />

				<ScrollControls horizontal={false} pages={SCROLLABLE} damping={0.62} enabled>
					<Scroll>
						<Kamishibai />
					</Scroll>
				</ScrollControls>
			</Fiber.Canvas>
		</div>
	)
}
