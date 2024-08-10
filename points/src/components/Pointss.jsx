import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import vertex from '../shaders/particles/vertex.glsl';
import fragment from '../shaders/particles/fragment.glsl';
import { useGLTF} from '@react-three/drei'


const Pointss = () => {

  // import ukulele
  const ukulele = useGLTF('./drums_high-poly.glb');

  return (
    <>
       <primitive object={ukulele.scene} scale = {1.5} position = {[ 0, -0.5, 0 ]} />
   
    </>
  );
};

export default Pointss;
