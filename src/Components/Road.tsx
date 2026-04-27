import * as THREE from "three";
import LampRow from "./LampRow";

const Road = () => {
  return (
    <>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        // Lifted up slightly on the Y-axis (0.01) so it doesn't flicker against the ground
        position={[0, 0.05, 0]}
        receiveShadow
      >
        {/* width, height (length of the road) */}
        <planeGeometry args={[4, 100]} />
        <meshStandardMaterial
          color="#2c2c2c" // Dark asphalt gray
          roughness={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* // yellow line in the middle of the road */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.06, 0]} // Slightly above the road to prevent z-fighting
        receiveShadow
      >
        <planeGeometry args={[0.1, 100]} />
        <meshStandardMaterial color="yellow" roughness={0.8} />
      </mesh>

      <LampRow spacing={10} roadLength={100} roadWidth={4} />
    </>
  );
};

export default Road;
