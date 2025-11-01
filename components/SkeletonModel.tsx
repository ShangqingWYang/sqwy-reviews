// @ts-nocheck
"use client";

import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function SkeletonModel({ onError }: { onError?: (msg: string) => void }) {
  const { scene } = useGLTF("/models/skeleton.glb", true, undefined, (err) => {
    console.error("❌ GLB failed to load:", err);
    onError?.(err?.message ?? "GLB failed");
  });

  useEffect(() => {
    console.log("✅ Skeleton GLB loaded");
  }, [scene]);

  // Ensure shadows & double-sided rendering
  scene.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
      if (obj.material) obj.material.side = THREE.DoubleSide;
    }
  });

  return (
    <primitive
      object={scene}
      scale={0.01}
      position={[0, -1.5, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

// ✅ Suspense preload (required)
useGLTF.preload("/models/skeleton.glb");
