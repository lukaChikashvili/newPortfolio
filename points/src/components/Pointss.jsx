import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import vertex from '../shaders/particles/vertex.glsl';
import fragment from '../shaders/particles/fragment.glsl';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Particles = () => {
  const particleRef = useRef();
  const model = useGLTF('./soccer_ball.glb');

  const particleGeometry = new THREE.BufferGeometry();

  const positions = [];

  useEffect(() => {

      
  model.scene.traverse((child) => {
    if(child.isMesh) {
      const { position } = child.geometry.attributes;

      console.log(position)
    }
  })
   
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
