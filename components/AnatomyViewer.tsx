// @ts-nocheck
"use client";

import React, { Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import SkeletonModel from "./SkeletonModel";

function AutoRotate({ children, speed = 0.4 }) {
  const ref = React.useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += speed * delta;
  });
  return <group ref={ref}>{children}</group>;
}

export default function AnatomyViewer() {
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="w-full h-[520px] rounded-2xl bg-gray-100 border shadow-inner relative overflow-hidden">
      {error && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-red-50 text-red-700 font-semibold text-sm">
          ❗ Failed to load 3D model: {error}
        </div>
      )}

      <Canvas
        shadows
        camera={{ position: [0, 1.6, 3.6], fov: 45 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <Environment preset="studio" />

          {/* ✅ Soft realistic lights */}
          <hemisphereLight intensity={0.45} groundColor="#777" />
          <directionalLight
            intensity={1.1}
            position={[3, 6, 5]}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />

          {/* ✅ Smooth auto-rotation wrapper */}
          <AutoRotate>
            <SkeletonModel onError={setError} />
          </AutoRotate>

          {/* ✅ Shadow under skeleton (looks grounded) */}
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.28}
            scale={8}
            blur={2.5}
            far={1.8}
          />

          {/* ✅ Smooth zoom + rotation limits */}
          <OrbitControls
  enablePan={false}
  maxDistance={20}   // ⬅️ was 6 — now zooms out MUCH further
  minDistance={2.4}
  target={[0, 0.8, 0]}
  zoomSpeed={0.6}    // ✅ smoother zooming
  rotateSpeed={0.8}  // ✅ less twitchy rotation
/>

        </Suspense>
      </Canvas>
    </div>
  );
}
