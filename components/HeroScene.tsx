"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Four interlocking logo rings with mouse tilt interaction
function InterlockingRings() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    // Continuous rotation
    group.current.rotation.y += delta * 0.2;
    group.current.rotation.x += delta * 0.08;

    // Mouse tilt parallax
    const targetX = (state.pointer.y * 0.3);
    const targetY = (state.pointer.x * 0.3);
    group.current.position.x += (targetY - group.current.position.x) * 0.05;
    group.current.position.y += (-targetX - group.current.position.y) * 0.05;
  });

  const rings: { color: string; position: [number, number, number]; rotation: [number, number, number] }[] = [
    { color: "#EA4335", position: [-0.65, 0.45, 0], rotation: [0.4, 0.6, 0] },  // Brand Red
    { color: "#4285F4", position: [0.65, 0.45, 0], rotation: [0.4, -0.6, 0] },   // Brand Blue
    { color: "#34A853", position: [-0.65, -0.45, 0], rotation: [-0.4, 0.6, 0] }, // Brand Green
    { color: "#FBBC05", position: [0.65, -0.45, 0], rotation: [-0.4, -0.6, 0] },  // Brand Yellow
  ];

  return (
    <group ref={group}>
      {rings.map((r, i) => (
        <mesh key={i} position={r.position} rotation={r.rotation}>
          <torusGeometry args={[1.2, 0.065, 24, 120]} />
          <meshStandardMaterial
            color={r.color}
            emissive={r.color}
            emissiveIntensity={0.65}
            roughness={0.2}
            metalness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

// Floating Cosmic Stardust particles echoing subtle space aesthetic
function CosmicParticles() {
  const count = 120;
  const mesh = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#EA4335"),
      new THREE.Color("#4285F4"),
      new THREE.Color("#34A853"),
      new THREE.Color("#FBBC05"),
      new THREE.Color("#D3C5F6"),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.03;
    mesh.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-80 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#D3C5F6" />
        <pointLight position={[-5, -5, -2]} intensity={1.2} color="#E12021" />
        <InterlockingRings />
        <CosmicParticles />
      </Canvas>
    </div>
  );
}
