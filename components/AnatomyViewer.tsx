// @ts-nocheck
"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import SkeletonModel from "./SkeletonModel";

export default function AnatomyViewer() {
  const [error, setError] = useState<string | null>(null);

  console.log("👀 AnatomyViewer mounted");

  useEffect(() => {
    console.log("🔍 useEffect running inside AnatomyViewer");
  }, []);

  return (
    <div
      className="w-full h-[520px] rounded-2xl bg-gray-100 border shadow-inner relative overflow-hidden"
      style={{ background: "#eee" }}
    >
      {error && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-red-50 text-red-700 font-semibold text-sm">
          ❗ Failed to load 3D model: {error}
        </div>
      )}

      <Canvas
        shadows
        camera={{ position: [0, 1.4, 3.5], fov: 45 }}
        gl={{ antialias: true }}
        onCreated={() => console.log("✅ Canvas mounted")}
      >
        <Suspense fallback={<FallbackLoader />}>
          <SceneContents setError={setError} />
        </Suspense>
      </Canvas>
    </div>
  );
}

/* ✅ Separate scene so we can confirm it renders */
function SceneContents({ setError }: { setError: (msg: string) => void }) {
  console.log("🌍 SceneContents mounted");

  return (
    <>
      <SkeletonModel onError={setError} onLoaded={() => console.log("🦴 Model finished loading")} />

      {/* Lights */}
      <primitive object={new THREE.HemisphereLight(0xffffff, 0x444444, 0.7)} />
      <primitive
        object={(() => {
          const light = new THREE.DirectionalLight(0xffffff, 1.2);
          light.position.set(4, 6, 5);
          light.castShadow = true;
          return light;
        })()}
      />

      <Environment preset="city" />
      <OrbitControls enablePan={false} minDistance={2.5} maxDistance={6} />
    </>
  );
}

/* ✅ Proper visible fallback */
function FallbackLoader() {
  console.log("⏳ Suspense fallback rendered");
  return (
    <mesh>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshBasicMaterial color="hotpink" wireframe />
    </mesh>
  );
}
