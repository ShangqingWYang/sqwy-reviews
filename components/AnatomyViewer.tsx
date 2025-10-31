'use client';
import React, { useMemo, useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, ContactShadows, useGLTF, Html } from '@react-three/drei';
import * as THREE from 'three';

type AnatomyViewerProps = {
  modelUrl?: string;                    // default: /Models/anatomy.glb
  autoRotate?: boolean;                 // default: true
  onOrganHover?: (name: string | null) => void;
  onOrganSelect?: (name: string) => void;
};

function HumanModel({
  modelUrl = '/Models/anatomy.glb',
  onHover,
  onPick
}: {
  modelUrl?: string;
  onHover: (name: string | null, target?: THREE.Mesh) => void;
  onPick: (name: string) => void;
}) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelUrl, true);

  // Track the previously-highlighted mesh so we can revert it.
  const prevMat = useRef<{ mesh: THREE.Mesh | null; color?: THREE.Color; emissive?: THREE.Color } | null>(null);

  // Prepare meshes for picking + highlight
  useMemo(() => {
    scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.isMesh) {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData.pickName = mesh.name || mesh.parent?.name || 'Unknown';
        // Ensure we have a standard material to tweak emissive on hover
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat) {
          // Normalize emissive to avoid undefined
          if (!mat.emissive) (mat as any).emissive = new THREE.Color(0x000000);
        }
      }
    });
  }, [scene]);

  // Simple hover highlight (emissive boost)
  const highlight = (mesh: THREE.Mesh | null) => {
    // Revert old
    if (prevMat.current?.mesh && prevMat.current.mesh.material) {
      const mm = prevMat.current.mesh.material as THREE.MeshStandardMaterial;
      if (mm) {
        if (prevMat.current.emissive) mm.emissive.copy(prevMat.current.emissive);
      }
    }
    prevMat.current = null;

    if (mesh && (mesh.material as THREE.MeshStandardMaterial)) {
      const mm = mesh.material as THREE.MeshStandardMaterial;
      prevMat.current = {
        mesh,
        emissive: mm.emissive ? mm.emissive.clone() : new THREE.Color(0x000000)
      };
      mm.emissive.setHex(0x2f6df6); // indigo-ish glow
    }
  };

  const handlePointerMove = (e: any) => {
    e.stopPropagation();
    const mesh = e.object as THREE.Mesh;
    const name = (mesh?.userData?.pickName as string) || mesh?.name || 'Unknown';
    highlight(mesh);
    onHover(name, mesh);
  };

  const handlePointerOut = () => {
    highlight(null);
    onHover(null);
  };

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    const name = e.object?.userData?.pickName || e.object?.name || 'Unknown';
    onPick(name);
  };

  // Fit model to view (center & scale)
  useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3()).length();
    const scale = 3.2 / (size || 1);
    scene.scale.setScalar(scale);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center.multiplyScalar(scale));
    scene.position.y -= 0.5;
  }, [scene]);

  return (
    <group
      ref={group}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
      onPointerDown={handlePointerDown}
    >
      <primitive object={scene} />
    </group>
  );
}

function AutoRotate({ enabled = true, speed = 0.25, children }: { enabled?: boolean; speed?: number; children?: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (enabled && ref.current) ref.current.rotation.y += speed * delta;
  });
  return <group ref={ref}>{children}</group>;
}

export default function AnatomyViewer({
  modelUrl = '/Models/anatomy.glb',
  autoRotate = true,
  onOrganHover,
  onOrganSelect
}: AnatomyViewerProps) {
  const [selected, setSelected] = useState<string>('');
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="w-full h-[520px] rounded-2xl bg-gray-100 border shadow-inner relative overflow-hidden">
      {/* HUD */}
      <div className="absolute left-3 top-3 z-10 space-y-2">
        {hovered && (
          <div className="rounded-md bg-white/95 border px-3 py-1 text-xs font-medium text-gray-800 shadow">
            Hover: <span className="font-semibold">{hovered}</span>
          </div>
        )}
        {selected && (
          <div className="rounded-md bg-white/95 border px-3 py-1 text-xs font-medium text-gray-800 shadow">
            Selected: <span className="font-semibold">{selected}</span>
          </div>
        )}
      </div>

      <Canvas
        dpr={[1, 2]}
        shadows
        gl={{ antialias: true }}
        camera={{ position: [0, 1.2, 3.8], fov: 45, near: 0.1, far: 100 }}
      >
        <Suspense
          fallback={
            <Html center>
              <div className="flex items-center gap-3 rounded-lg bg-white/90 px-4 py-3 shadow border">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent" />
                <span className="text-sm text-gray-700">Loading 3D anatomy…</span>
              </div>
            </Html>
          }
        >
          {/* Lights / env */}
          <hemisphereLight intensity={0.5} groundColor={'#7a7a7a'} />
          <directionalLight position={[4, 6, 5]} intensity={1.1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
          <Environment preset="city" />

          {/* Model + autorotate */}
          <AutoRotate enabled={autoRotate} speed={0.3}>
            <HumanModel
              modelUrl={modelUrl}
              onHover={(name) => {
                setHovered(name);
                onOrganHover?.(name);
              }}
              onPick={(name) => {
                setSelected(name);
                onOrganSelect?.(name);
              }}
            />
          </AutoRotate>

          {/* Ground */}
          <ContactShadows position={[0, -1.05, 0]} opacity={0.3} scale={8} blur={2.5} far={1.8} />

          {/* Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={2.2}
            maxDistance={6.5}
            target={[0, 0.6, 0]}
            autoRotate={false} // we rotate via AutoRotate group for smoothness
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/Models/anatomy.glb');
