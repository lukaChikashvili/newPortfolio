import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import vertex from '../shaders/particles/vertex.glsl';
import fragment from '../shaders/particles/fragment.glsl';
import { useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';



const Particles = () => {

  let particleRef = useRef();

     const particleGeometry = new THREE.SphereGeometry(3);

     const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
   
     });

     return (
        <primitive ref={particleRef}  object={new THREE.Points(particleGeometry, particleMaterial)}/>
     );
}

const Pointss = () => {

  
 
  return (
 <>
   <Particles />

  
 </>
  )
}

export default Pointss
