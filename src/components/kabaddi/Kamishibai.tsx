import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export const Kamishibai = () => {
	const scroll = useScroll()

	useFrame((state, delta) => {
		const offset = 1 - scroll.offset

		state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
		state.camera.lookAt(0, 0, 0)
	})
	return <></>
}
export default Kamishibai
