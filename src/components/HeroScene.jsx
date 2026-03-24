import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { Suspense, useRef } from 'react'

const FloatingShape = ({ position, color, type, scale = 1, speed = 2, distort = 0.35, opacity = 0.45 }) => {
  const meshRef = useRef()

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.12
      meshRef.current.rotation.y += delta * 0.18
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.7}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {type === 'torus' && <torusGeometry args={[1, 0.35, 16, 80]} />}
        {type === 'icosahedron' && <icosahedronGeometry args={[1, 1]} />}
        {type === 'octahedron' && <octahedronGeometry args={[1]} />}
        {type === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={speed}
          roughness={0.15}
          metalness={0.85}
          transparent
          opacity={opacity}
        />
      </mesh>
    </Float>
  )
}

const HeroScene = () => (
  <Canvas
    camera={{ position: [0, 0, 9], fov: 48 }}
    style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    gl={{ alpha: true, antialias: true }}
    dpr={[1, 1.5]}
  >
    <ambientLight intensity={0.35} />
    <directionalLight position={[10, 10, 5]} intensity={1.1} color="#a78bfa" />
    <directionalLight position={[-10, -5, -5]} intensity={0.5} color="#22d3ee" />
    <pointLight position={[0, 5, 3]} intensity={0.4} color="#e879f9" />

    <Suspense fallback={null}>
      {/* Large torus — far right */}
      <FloatingShape
        position={[5.8, 0.8, -3.5]}
        color="#7c3aed"
        type="torus"
        scale={1.4}
        distort={0.3}
        opacity={0.42}
      />
      {/* Icosahedron — left side */}
      <FloatingShape
        position={[-5.5, -1.8, -4.5]}
        color="#22d3ee"
        type="icosahedron"
        scale={1.1}
        distort={0.45}
        speed={1.8}
        opacity={0.38}
      />
      {/* Small sphere — lower right */}
      <FloatingShape
        position={[3.5, -3.8, -5]}
        color="#e879f9"
        type="sphere"
        scale={0.85}
        distort={0.65}
        speed={2.5}
        opacity={0.35}
      />
      {/* Octahedron — upper left */}
      <FloatingShape
        position={[-3.8, 3, -6]}
        color="#8b5cf6"
        type="octahedron"
        scale={0.7}
        distort={0.4}
        speed={1.5}
        opacity={0.32}
      />
    </Suspense>
  </Canvas>
)

export default HeroScene
