import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Lights from './components/Lights'
import Pointss from './components/Pointss'
import drumImg from './assets/drumImg.png'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import violin from './assets/violin.png';
import ukul from './assets/ukul.png';

function App() {

  // retrieve from context
  const { setModal, modal , setViolin, setDrum, setUkulele} = useContext(UserContext);

  // images for modal
  const images = [
    violin, 
    ukul,
    drumImg
  ];

  // change model function
  const changeModel = (index) => {
     if(index === 0) {
      setViolin(true);
      setDrum(false);
      setUkulele(false);
     }else if(index === 2) {
      setDrum(true);
      setUkulele(false);
      setViolin(false);
     }else if(index === 1) {
      setUkulele(true);
      setViolin(false);
      setDrum(false);
     }
  }

  return (
    <>
     <Canvas camera={ { fov: 75, near: 0.2, far: 1000, position: [0, 0, 2]  } }>
    <OrbitControls makeDefault />
     <Pointss />
     <Lights />
     </Canvas>

     <div className='absolute top-0 left-0  bg-transparent w-full min-h-screen '>
     
   <img src={drumImg} className='w-16 h-16 rounded-full object-cover absolute bottom-6 
   right-6 shadow-lg cursor-pointer duration-500 ease hover:opacity-80' 
    onClick={() => setModal(!modal)}
   />

{modal &&
    <div className='absolute bottom-28 right-6 flex flex-col gap-4  '>
    { images.map((value, i) => (
       <img key={i} src = {value} onClick={() => changeModel(i)} className='w-16 h-16 object-cover rounded-full shadow-lg cursor-pointer border-2 duration-500 ease hover:border-white hover:opacity-80'/>
    ))}
      </div>
 }
     </div>
    </>
  )
}

export default App
