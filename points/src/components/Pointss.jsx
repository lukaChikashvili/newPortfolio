import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import vertex from '../shaders/particles/vertex.glsl';
import fragment from '../shaders/particles/fragment.glsl';
import { useGLTF } from '@react-three/drei';

const Particles = () => {
  const particleRef = useRef();
  const model = useGLTF('./models1.glb');

  const particleGeometry = new THREE.BufferGeometry();

  useEffect(() => {
    
    const positions = model.scene.children.map((child) => child.geometry.attributes.position);

    let maxCount = 0;

    for(const position of positions) {
      if(position.count > maxCount) {
        maxCount = position.count;
      }
     }
    
     const newPositions = [];

    for(const position of positions) {
        const originalArray = position.array;
        const newArray = new Float32Array(maxCount * 3);
        
        for(let i = 0; i < maxCount; i++) {
          const i3 = i * 3;

          if(i3 < originalArray.length) {
            newArray[i3 + 0] = originalArray[i3 + 0];
            newArray[i3 + 1] = originalArray[i3 + 1];
            newArray[i3 + 2] = originalArray[i3 + 2];
          }else {
            newArray[i3 + 0] = 0;
            newArray[i3 + 1] = 0;
            newArray[i3 + 2] = 0;
          }
        }

        newPositions.push(new THREE.Float32BufferAttribute(newArray, 3));

       particleGeometry.setAttribute('position', newPositions[1])
     }
  }, [model]);

  const particleMaterial = new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  return <points ref={particleRef} geometry={particleGeometry} material={particleMaterial} />;
};

const Pointss = () => {
  return (
    <>
      <Particles />
    </>
  );
};

export default Pointss;
