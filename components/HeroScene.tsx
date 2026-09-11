"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

// Echoes the interlocking-diamond logo mark as a 3D object.
// Four torus rings, one per brand color, rotating on offset axes.
function InterlockingRings() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.x += delta * 0.05;
  });

  const rings: { color: string; position: [number, number, number]; rotation: [number, number, number] }[] = [
    { color: "#F4B400", position: [-0.6, 0.4, 0], rotation: [0.4, 0.6, 0] },
    { color: "#E8392B", position: [0.6, 0.4, 0], rotation: [0.4, -0.6, 0] },
    { color: "#3457D5", position: [-0.6, -0.4, 0], rotation: [-0.4, 0.6, 0] },
    { color: "#34A853", position: [0.6, -0.4, 0], rotation: [-0.4, -0.6, 0] },
  ];

  return (
    <group ref={group}>
      {rings.map((r, i) => (
        <mesh key={i} position={r.position} rotation={r.rotation}>
          <torusGeometry args={[1.1, 0.06, 16, 100]} />
          <meshStandardMaterial
            color={r.color}
            emissive={r.color}
            emissiveIntensity={0.4}
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.2} />
        <InterlockingRings />
      </Canvas>
    </div>
  );
}
