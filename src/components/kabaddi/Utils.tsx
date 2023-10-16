import { Image, useScroll } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export const Images = () => {
	const { height } = useThree((state) => state.viewport)
	const group = useRef({} as any)
	const data = useScroll()

	useFrame(() => {
		group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
		group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
		group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3
		group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3
	})
	return (
		<group ref={group}>
			<Image
				url="https://plus.unsplash.com/premium_photo-1673827679979-f94e67381cb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
				scale={[4, height, 1]}
				position={[-1, 0, 1]}
			/>
			<Image
				url="https://images.unsplash.com/photo-1658134203051-c0601fc119b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
				scale={3}
				position={[2, 0, 1]}
			/>
			<Image
				url="https://images.unsplash.com/photo-1688435088702-e799b778d970?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
				scale={[1, 2.7, 1]}
				position={[-2.3, -height, -2]}
			/>
			<Image
				url="https://images.unsplash.com/photo-1688408958776-00a5c1b17c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
				scale={[1.4, 2, 1]}
				position={[1.3, -height - 0.3, 1.2]}
			/>
		</group>
	)
}
export default Images
