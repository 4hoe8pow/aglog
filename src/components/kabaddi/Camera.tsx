import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import type { Props } from "astro"
import { useRef, useLayoutEffect, useEffect } from "react"

export const CustomOrbitControls: React.FC<Props> = ({ cameraState }) => {
	const ref = useRef<OrbitControlsImpl>(null)
	const cameraRef = useRef<PerspectiveCamera>(null)

	useLayoutEffect(() => {
		if (cameraRef && cameraRef.current) {
			cameraRef.current.position.set(50, 100, 300)
		}
	}, [])

	useEffect(() => {
		if (cameraRef && cameraRef.current) {
			cameraRef.current.fov = cameraState.fov
		}
	}, [cameraState])

	return (
		<>
			<PerspectiveCamera makeDefault ref={cameraRef} {...cameraState} />
			<OrbitControls ref={ref} makeDefault />
		</>
	)
}
export default CustomOrbitControls
