import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Rain = () => {
  const rainRef = useRef<THREE.Points>(null);
  const { camera } = useThree();

  useEffect(() => {
    if (!rainRef.current) return;

    const rainGeometry = new THREE.BufferGeometry();
    const rainCount = 10000;
    const positions = new Float32Array(rainCount * 3);

    for (let i = 0; i < rainCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 200; // x
      positions[i + 1] = Math.random() * 100; // y
      positions[i + 2] = (Math.random() - 0.5) * 200; // z
    }

    rainGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    const rainMaterial = new THREE.PointsMaterial({
      color: 0x888888,
      size: 0.2,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    });

    rainRef.current.geometry = rainGeometry;
    rainRef.current.material = rainMaterial;
  }, []);

  useFrame(() => {
    if (!rainRef.current) return;

    const positionAttribute = rainRef.current.geometry.getAttribute(
      "position",
    ) as THREE.BufferAttribute;
    const positions = positionAttribute.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] -= 0.8; // Make rain fall

      // Destroy particle when it reaches ground (y = 0)
      if (positions[i + 1] < 0) {
        // Move particle far away instead of destroying
        positions[i] = (Math.random() - 0.5) * 200;
        positions[i + 1] = camera.position.y + 50;
        positions[i + 2] = (Math.random() - 0.5) * 200;
      }
    }

    positionAttribute.needsUpdate = true;
  });

  return <points ref={rainRef} />;
};

export default Rain;
