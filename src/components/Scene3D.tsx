'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Stars, Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'

gsap.registerPlugin(ScrollTrigger)

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHover] = useState(false)

  useFrame((state) => {
    if (!meshRef.current) return
    
    // Smoothly track mouse position
    const { x, y } = state.mouse
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, y * 0.5, 0.1)
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.5, 0.1)
    
    // Floating effect
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, Math.sin(state.clock.elapsedTime) * 0.2, 0.1)
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere 
        ref={meshRef} 
        args={[1, 100, 100]} 
        scale={1.5}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#00FFFF" : "#39FF14"} // Cyan on hover, Neon Green otherwise
          speed={3}
          distort={0.4}
          radius={1}
        />
      </Sphere>
    </Float>
  )
}

const ScrollRig = () => {
  const { camera, scene } = useThree()
  
  useEffect(() => {
    // Scroll animation for camera
    gsap.to(camera.position, {
      z: 2,
      y: -2,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    })

    // Rotate the whole scene slightly on scroll
    gsap.to(scene.rotation, {
      y: Math.PI * 0.5,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    })
  }, [camera, scene])

  return null
}

const Scene3D = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-[#030303]">
      <Canvas
        gl={{ antialias: true, alpha: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <Suspense fallback={null}>
          <ScrollRig />
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#00FFFF" intensity={1} />
          <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={2} />

          {/* Background Stars */}
          <Stars 
            radius={100} 
            depth={50} 
            count={7000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1.5} 
          />

          <AnimatedSphere />

          {/* Post-processing effects */}
          <EffectComposer enableNormalPass={false}>
            <Bloom 
              luminanceThreshold={0.2} 
              mipmapBlur 
              intensity={1.5} 
              radius={0.4} 
            />
            <Noise opacity={0.05} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>

          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Suspense>
      </Canvas>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black pointer-events-none" />
    </div>
  )
}

export default Scene3D
