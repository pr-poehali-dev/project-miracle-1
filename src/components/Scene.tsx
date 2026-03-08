import { useRef, useState, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

const images = [
  "https://cdn.poehali.dev/projects/82ea0da1-48a0-43b4-a00b-1ae54d55a69a/files/7386e567-9ef6-45a0-8243-6bde8d2c91d3.jpg",
  "https://cdn.poehali.dev/projects/82ea0da1-48a0-43b4-a00b-1ae54d55a69a/files/23f912a5-f73f-48f7-bff3-9197be64e95f.jpg",
  "https://cdn.poehali.dev/projects/82ea0da1-48a0-43b4-a00b-1ae54d55a69a/files/0d20d9ee-2846-48d4-8cf2-d5f03ce978f3.jpg",
  "https://cdn.poehali.dev/projects/82ea0da1-48a0-43b4-a00b-1ae54d55a69a/files/ddb5b6e4-2af9-4d01-9024-dbd1241dad7c.jpg",
  "https://cdn.poehali.dev/projects/82ea0da1-48a0-43b4-a00b-1ae54d55a69a/files/d7f8401f-510f-414b-ab6f-ae39da16b03d.jpg",
  "https://cdn.poehali.dev/projects/82ea0da1-48a0-43b4-a00b-1ae54d55a69a/files/4948e54c-aa83-48c8-92ff-b73edf3fa07a.jpg",
  "https://cdn.poehali.dev/projects/82ea0da1-48a0-43b4-a00b-1ae54d55a69a/files/7386e567-9ef6-45a0-8243-6bde8d2c91d3.jpg",
  "https://cdn.poehali.dev/projects/82ea0da1-48a0-43b4-a00b-1ae54d55a69a/files/23f912a5-f73f-48f7-bff3-9197be64e95f.jpg",
  "https://cdn.poehali.dev/projects/82ea0da1-48a0-43b4-a00b-1ae54d55a69a/files/0d20d9ee-2846-48d4-8cf2-d5f03ce978f3.jpg",
  "https://cdn.poehali.dev/projects/82ea0da1-48a0-43b4-a00b-1ae54d55a69a/files/ddb5b6e4-2af9-4d01-9024-dbd1241dad7c.jpg",
  "https://cdn.poehali.dev/projects/82ea0da1-48a0-43b4-a00b-1ae54d55a69a/files/d7f8401f-510f-414b-ab6f-ae39da16b03d.jpg",
  "https://cdn.poehali.dev/projects/82ea0da1-48a0-43b4-a00b-1ae54d55a69a/files/4948e54c-aa83-48c8-92ff-b73edf3fa07a.jpg",
  "https://cdn.poehali.dev/projects/82ea0da1-48a0-43b4-a00b-1ae54d55a69a/files/7386e567-9ef6-45a0-8243-6bde8d2c91d3.jpg",
  "https://cdn.poehali.dev/projects/82ea0da1-48a0-43b4-a00b-1ae54d55a69a/files/23f912a5-f73f-48f7-bff3-9197be64e95f.jpg",
  "https://cdn.poehali.dev/projects/82ea0da1-48a0-43b4-a00b-1ae54d55a69a/files/0d20d9ee-2846-48d4-8cf2-d5f03ce978f3.jpg",
  "https://cdn.poehali.dev/projects/82ea0da1-48a0-43b4-a00b-1ae54d55a69a/files/ddb5b6e4-2af9-4d01-9024-dbd1241dad7c.jpg",
]

const imagePositions = [
  { pos: [-3.2, 1.8, -2.5] as [number, number, number], rot: [0, 0.4, 0] as [number, number, number], scale: 0.7 },
  { pos: [2.8, -1.2, -3] as [number, number, number], rot: [0, -0.5, 0] as [number, number, number], scale: 0.8 },
  { pos: [-1.5, 2.5, -1.8] as [number, number, number], rot: [0, 0.3, 0] as [number, number, number], scale: 0.65 },
  { pos: [3.5, 0.8, -2.2] as [number, number, number], rot: [0, -0.4, 0] as [number, number, number], scale: 0.75 },
  { pos: [-2.8, -2.1, -2.8] as [number, number, number], rot: [0, 0.5, 0] as [number, number, number], scale: 0.7 },
  { pos: [1.2, 2.2, -2.5] as [number, number, number], rot: [0, -0.3, 0] as [number, number, number], scale: 0.8 },
  { pos: [-3.5, 0.5, -2] as [number, number, number], rot: [0, 0.6, 0] as [number, number, number], scale: 0.65 },
  { pos: [2.2, -2.5, -2.6] as [number, number, number], rot: [0, -0.4, 0] as [number, number, number], scale: 0.75 },
  { pos: [-1.8, -0.8, -3.2] as [number, number, number], rot: [0, 0.3, 0] as [number, number, number], scale: 0.7 },
  { pos: [3.2, 1.5, -1.9] as [number, number, number], rot: [0, -0.5, 0] as [number, number, number], scale: 0.8 },
  { pos: [-2.5, 2.8, -2.4] as [number, number, number], rot: [0, 0.4, 0] as [number, number, number], scale: 0.65 },
  { pos: [0.8, -1.8, -2.7] as [number, number, number], rot: [0, -0.3, 0] as [number, number, number], scale: 0.75 },
  { pos: [-3.8, -1.5, -2.3] as [number, number, number], rot: [0, 0.5, 0] as [number, number, number], scale: 0.7 },
  { pos: [2.5, 2.8, -2.9] as [number, number, number], rot: [0, -0.4, 0] as [number, number, number], scale: 0.8 },
  { pos: [-0.8, -2.8, -2.1] as [number, number, number], rot: [0, 0.3, 0] as [number, number, number], scale: 0.65 },
  { pos: [3.8, -0.5, -2.5] as [number, number, number], rot: [0, -0.5, 0] as [number, number, number], scale: 0.75 },
]

interface FloatingImageProps {
  texture: THREE.Texture
  index: number
  rotation: number
}

function FloatingImage({ texture, index, rotation }: FloatingImageProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const config = imagePositions[index]

  useFrame((state) => {
    if (!meshRef.current) return

    const targetRotY = config.rot[1] + rotation
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.12)

    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = config.pos[1] + Math.sin(time * 0.5 + index) * 0.1
  })

  return (
    <mesh ref={meshRef} position={config.pos} rotation={config.rot} scale={config.scale}>
      <planeGeometry args={[0.833, 1.2]} />
      <meshStandardMaterial
        map={texture}
        transparent
        opacity={0.95}
        side={THREE.DoubleSide}
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  )
}

export default function Scene() {
  const [rotation, setRotation] = useState(0)
  const [targetRotation, setTargetRotation] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [lastInteraction, setLastInteraction] = useState(Date.now())
  const { camera, size } = useThree()
  const mousePosition = useRef({ x: 0, y: 0 })
  const isDragging = useRef(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const dragRotation = useRef(0)

  const textures = useTexture(images)

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        const deltaX = e.clientX - dragStart.current.x
        const rotationAmount = (deltaX / size.width) * Math.PI * 2
        setTargetRotation(dragRotation.current + rotationAmount)
      } else {
        mousePosition.current = {
          x: (e.clientX / size.width) * 2 - 1,
          y: -(e.clientY / size.height) * 2 + 1,
        }
      }
      setLastInteraction(Date.now())
      setIsAutoPlaying(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [size])

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true
      dragStart.current = { x: e.clientX, y: e.clientY }
      dragRotation.current = targetRotation
      setLastInteraction(Date.now())
      setIsAutoPlaying(false)
    }

    const handleMouseUp = () => {
      isDragging.current = false
    }

    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    return () => {
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [targetRotation])

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      isDragging.current = true
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      dragRotation.current = targetRotation
      setLastInteraction(Date.now())
      setIsAutoPlaying(false)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging.current) {
        const deltaX = e.touches[0].clientX - dragStart.current.x
        const rotationAmount = (deltaX / size.width) * Math.PI * 2
        setTargetRotation(dragRotation.current + rotationAmount)
      }
      setLastInteraction(Date.now())
      setIsAutoPlaying(false)
    }

    const handleTouchEnd = () => {
      isDragging.current = false
    }

    window.addEventListener("touchstart", handleTouchStart)
    window.addEventListener("touchmove", handleTouchMove)
    window.addEventListener("touchend", handleTouchEnd)
    return () => {
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [targetRotation, size])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setTargetRotation((prev) => prev + Math.PI / 3)
        setLastInteraction(Date.now())
        setIsAutoPlaying(false)
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setTargetRotation((prev) => prev - Math.PI / 3)
        setLastInteraction(Date.now())
        setIsAutoPlaying(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    let isThrottled = false

    const handleWheel = (e: WheelEvent) => {
      if (isThrottled) return

      isThrottled = true
      setTimeout(() => {
        isThrottled = false
      }, 400)

      if (e.deltaY > 0) {
        setTargetRotation((prev) => prev + Math.PI / 3)
      } else {
        setTargetRotation((prev) => prev - Math.PI / 3)
      }

      setLastInteraction(Date.now())
      setIsAutoPlaying(false)
    }

    window.addEventListener("wheel", handleWheel, { passive: true })
    return () => {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [])

  // Auto-play after 3s of inactivity
  useEffect(() => {
    const interval = setInterval(() => {
      const timeSinceLastInteraction = Date.now() - lastInteraction
      if (timeSinceLastInteraction > 3000) {
        setIsAutoPlaying(true)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [lastInteraction])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setTargetRotation((prev) => prev + Math.PI / 3)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useFrame(() => {
    if (!isDragging.current) {
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, mousePosition.current.x * 0.5, 0.1)
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, mousePosition.current.y * 0.5, 0.1)
    }
    camera.lookAt(0, 0, 0)

    setRotation((prev) => THREE.MathUtils.lerp(prev, targetRotation, 0.12))
  })

  return (
    <>
      {/* Enchanted forest lighting */}
      <ambientLight intensity={0.3} color="#1a3d2e" />
      <pointLight position={[0, 5, 2]} intensity={1.2} color="#4ade80" />
      <pointLight position={[-8, 3, -3]} intensity={0.8} color="#7c3aed" />
      <pointLight position={[8, -2, -4]} intensity={0.6} color="#22c55e" />
      <pointLight position={[0, -5, 2]} intensity={0.4} color="#86efac" />
      <spotLight position={[0, 8, 5]} intensity={0.5} angle={0.8} penumbra={1} color="#bbf7d0" />

      {textures.map((texture, index) => (
        <FloatingImage key={index} texture={texture} index={index} rotation={rotation} />
      ))}

      {/* Forest floor — misty reflection */}
      <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#0d2b1a" transparent opacity={0.25} roughness={0.05} metalness={0.95} />
      </mesh>
    </>
  )
}