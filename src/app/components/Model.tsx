"use client";

import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import * as THREE from "three";

export default function Model() {
  // Explicit typing for GLTF
  const { nodes } = useGLTF("/torrus.glb") as unknown as {
    nodes: {
      Torus002: THREE.Mesh;
    };
  };

  const { viewport } = useThree();
  const torus = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (torus.current) {
      torus.current.rotation.x += 0.02;
    }
  });

  // Leva controls (still works, but UI hidden)
  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  // Responsive scale (mobile / tablet / desktop)
  const isClient = typeof window !== "undefined";
  const width = isClient ? window.innerWidth : 1024;

  const scale =
    width < 640
      ? viewport.width / 1.7 // mobile
      : width < 1024
      ? viewport.width / 2.8 // tablet
      : viewport.width / 3.25; // desktop

  return (
    <>
      {/* Hide Leva UI in frontend but keep controls */}
      <Leva hidden />

      <group scale={scale}>
        <mesh ref={torus} geometry={nodes.Torus002.geometry}>
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
      </group>
    </>
  );
}

// Preload model for better performance
useGLTF.preload("/torrus.glb");
