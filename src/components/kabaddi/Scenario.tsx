import * as Fiber from '@react-three/fiber'
import { Scroll, ScrollControls, CameraControls } from '@react-three/drei'
import Images from './Utils'
import { useRef } from 'react'

export const SCROLLABLE = 5

export default () => {
	const cameraControlRef = useRef<CameraControls | null>(null)
	return (
		<div className="whitespace-nowrap" style={{ width: '100%', height: '100vh' }}>
			<Fiber.Canvas>
				<CameraControls ref={cameraControlRef} makeDefault />
				<ScrollControls horizontal={false} pages={SCROLLABLE} damping={0.32} enabled>
					<Scroll>
						<Images />
					</Scroll>
					<Scroll html>
						<h1 style={{ position: 'absolute', top: '60vh', left: '1.5em' }}>Hi,there.</h1>
						<h1 style={{ position: 'absolute', top: '140vh', left: '20vw' }}>Jamstack.</h1>
					</Scroll>
				</ScrollControls>
			</Fiber.Canvas>
		</div>
	)
}
