import { useGLTF } from '@react-three/drei'
import { clone } from 'three/examples/jsm/utils/SkeletonUtils'

export default function ThreeCar({ position = [0, 0, 0], scale = 0.5, rotation = [0, 0, 0] }) {
  const { scene } = useGLTF('/models/car.glb')
  const cloned = clone(scene)  // ← deep clone, safe for multiple instances
  return <primitive object={cloned} scale={scale} position={position} rotation={rotation} />
}
