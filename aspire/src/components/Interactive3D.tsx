"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Icosahedron, TorusKnot, Float, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { easing } from "maath";

function RotatingShape() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smoothly interpolate group rotation based on mouse position (momentum physics)
      easing.dampE(
        groupRef.current.rotation,
        [state.pointer.y * 0.5, -state.pointer.x * 0.5, 0],
        0.25,
        delta
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        {/* Outer Wireframe Icosahedron */}
        <Icosahedron args={[2.5, 0]}>
          <meshStandardMaterial color="#FFD700" wireframe transparent opacity={0.3} />
        </Icosahedron>
        
        {/* Inner Distorted Core */}
        <Icosahedron args={[1.2, 3]} scale={1}>
          <MeshDistortMaterial 
            color="#FFD700" 
            roughness={0.1} 
            metalness={1} 
            emissive="#2a1b00"
            distort={0.4}
            speed={2}
          />
        </Icosahedron>
      </Float>

      {/* Floating Data Particles */}
      <Sparkles count={150} scale={8} size={4} speed={0.4} opacity={0.5} color="#FFD700" />
      <Sparkles count={50} scale={12} size={6} speed={0.2} opacity={0.3} color="#ffffff" />
    </group>
  );
}

export default function Interactive3D() {
  return (
    <div style={{ width: '100%', height: '100%', cursor: 'grab' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* Cinematic Lighting */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={1} color="#FF8C00" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#FFD700" distance={10} />
        
        <RotatingShape />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
