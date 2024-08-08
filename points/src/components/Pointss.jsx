import React, { useRef } from 'react'
import * as THREE from 'three'
import vertex from '../shaders/particles/vertex.glsl';
import fragment from '../shaders/particles/fragment.glsl';
import { useTexture } from '@react-three/drei';



const Particles = () => {

  // load image
  const image = useTexture('./images.jpg');

     const particleRef = useRef();

     const particleGeometry = new THREE.PlaneGeometry(10, 10, 128, 128);

     const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: {
        uTexture: new THREE.Uniform(image)
      }
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
