import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Lights from './components/Lights'
import Pointss from './components/Pointss'
import drumImg from './assets/drumImg.png'
import { useContext, useEffect } from 'react'
import { UserContext } from './context/UserContext'
import violins from './assets/violin.png';
import ukul from './assets/ukul.png';
import gsap from 'gsap'

function App() {

  // retrieve from context
  const { setModal, modal , setViolin, setDrum, setUkulele, violin, ukulele, drum} = useContext(UserContext);

  // images for modal
  const images = [
    violins, 
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

  useEffect(() => {
    gsap.fromTo('.txt', 
      { opacity: 0, y: 50 },  
      { opacity: 1, y: 0, duration: 1.4, ease: 'power2.inOut' } 
    );
  }, [violin, ukulele, drum]); 
  return (
    <>
     <Canvas camera={ { fov: 75, near: 0.2, far: 1000, position: [0, 0, 2]  } }>
    <OrbitControls makeDefault />
     <Pointss />
     <Lights />
     </Canvas>

     <div className='absolute top-0 left-0  bg-transparent w-full min-h-screen flex items-center justify-center   '>
     
   <img src={violin ? violins : drum ? drumImg : ukulele ? ukul : ""} className='w-16 h-16 rounded-full object-cover absolute bottom-6 
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


     <h1 className='text-6xl uppercase txt opacity-0 cursor-pointer text-[#191919]' style={{marginTop:'550px'}} >{violin ? "The violin" : ukulele ? "the ukulele" : drum ? "the drums" : ""}</h1>
     </div>
    </>
  )
}

export default App
