import React, { useRef } from 'react'
import * as THREE from 'three'
import vertex from '../shaders/particles/vertex.glsl';
import fragment from '../shaders/particles/fragment.glsl';



const Particles = () => {
     const particleRef = useRef();

     const particleGeometry = new THREE.PlaneGeometry(10, 10, 32, 32);

     const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment

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
