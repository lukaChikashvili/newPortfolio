import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Lights from './components/Lights'
import Pointss from './components/Pointss'
function App() {

  return (
    <>
     <Canvas camera={ { fov: 75, near: 0.2, far: 1000, position: [0, 0, 10]  } }>
    <OrbitControls makeDefault />
     <Pointss />
     <Lights />
     </Canvas>
    </>
  )
}

export default App
