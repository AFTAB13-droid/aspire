"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import * as THREE from "three";
import { easing } from "maath";

function Nav3DLogo() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * (hovered ? 1.5 : 0.3);
      meshRef.current.rotation.y += delta * (hovered ? 1.5 : 0.4);
      easing.damp3(meshRef.current.scale, hovered ? [1.4, 1.4, 1.4] : [1, 1, 1], 0.15, delta);
    }
  });

  return (
    <Icosahedron 
      ref={meshRef} 
      args={[1.2, 0]} 
      onPointerOver={() => setHover(true)} 
      onPointerOut={() => setHover(false)}
    >
      <meshStandardMaterial 
        color="#FFD700" 
        metalness={0.9} 
        roughness={0.1} 
        wireframe={hovered}
      />
    </Icosahedron>
  );
}

export default function Nav3D() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[0, 0, 0]} intensity={1} color="#FFD700" distance={5} />
      <Nav3DLogo />
    </Canvas>
  );
}
