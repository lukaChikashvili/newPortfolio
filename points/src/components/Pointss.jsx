import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import vertex from '../shaders/particles/vertex.glsl';
import fragment from '../shaders/particles/fragment.glsl';
import { Html, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { Timeline } from 'gsap/gsap-core';

const Particles = () => {
  const particleRef = useRef();
  const model = useGLTF('./models1.glb');
  const particleGeometry = new THREE.BufferGeometry();
  
   const colorA = '#ff7300';
   const colorB = '#0091ff';

  const particleMaterial = new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    uniforms: {
      uProgress: { value: 0 },
      uColorA: new THREE.Uniform(new THREE.Color(colorA)),
      uColorB: new THREE.Uniform(new THREE.Color(colorB)),
    },
  });

  

  useEffect(() => {
    const positions = model.scene.children.map((child) => child.geometry.attributes.position);

  

    let maxCount = 0;
    for (const position of positions) {
      if (position.count > maxCount) {
        maxCount = position.count;
      }
    }

    const newPositions = [];
    let particleIndex = 0;

    for (const position of positions) {
      const originalArray = position.array;
      const newArray = new Float32Array(maxCount * 3);

      for (let i = 0; i < maxCount; i++) {
        const i3 = i * 3;

        if (i3 < originalArray.length) {
          newArray[i3 + 0] = originalArray[i3 + 0];
          newArray[i3 + 1] = originalArray[i3 + 1];
          newArray[i3 + 2] = originalArray[i3 + 2];
        } else {
          const randomIndex = Math.floor(position.count * Math.random()) * 3;
          newArray[i3 + 0] = originalArray[randomIndex + 0];
          newArray[i3 + 1] = originalArray[randomIndex + 1];
          newArray[i3 + 2] = originalArray[randomIndex + 2];
        }
      }

      newPositions.push(new THREE.Float32BufferAttribute(newArray, 3));
    }

    particleGeometry.setAttribute('position', newPositions[particleIndex]);
    particleGeometry.setAttribute('aPositionTarget', newPositions[1]);

    

    const morph = (index) => {
      particleGeometry.setAttribute('position', newPositions[particleIndex]);
      particleGeometry.setAttribute('aPositionTarget', newPositions[index]);

      gsap.fromTo(
        particleMaterial.uniforms.uProgress,
        { value: 0 },
        { value: 1, duration: 5 }
      );

      particleIndex = index;

     
      
    };

    

    const morphTimeline = gsap.timeline();

    morphTimeline
    .call(() => morph(0), [], 0)
    .call(() => morph(1), [], 5)  
    .call(() => morph(2), [], 10) 
    .call(() => morph(3), [], 15) 

  
  }, [model, particleGeometry, particleMaterial]);



    

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
