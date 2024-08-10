import React, { useContext, useEffect, useRef } from 'react';
import * as THREE from 'three';
import vertex from '../shaders/particles/vertex.glsl';
import fragment from '../shaders/particles/fragment.glsl';
import { Float, useGLTF} from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { UserContext } from '../context/UserContext';
import { Bloom, EffectComposer, Glitch, Noise, Outline } from '@react-three/postprocessing'


const Pointss = () => {

  const { violin, drum, ukulele } = useContext(UserContext);

  // import ukulele
  const drumModel = useGLTF('./drums_high-poly.glb');
  const violinModel = useGLTF('./violin.glb');
  const uku = useGLTF('./ukulele.glb');




  return (
    <>

 
    
    <Float>
     {drum &&  <primitive object={drumModel.scene} scale = {1.5} position = {[ 0, -0.5, 0 ]}/>} 
       
   {violin &&  <primitive object={violinModel.scene} scale = {0.05} position = {[ 0, -0.5, 0 ]}  />}

   {ukulele &&  <primitive object={uku.scene} scale = {3} position = {[ 0, 0.5, 0 ]}  />}
   </Float>
    </>
  );
};

export default Pointss;
