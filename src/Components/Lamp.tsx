import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

const Lamp = ({ lampPositionRight }: { lampPositionRight?: boolean }) => {
  const { scene } = useGLTF("/scifi_lamp.glb");
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  const lampSize = {
    height: 1,
    width: 1,
    depth: 0.5,
  };

  return (
    <>
      <group position={[0, 0, 0]}>
        <primitive
          object={clonedScene}
          scale={[lampSize.width, lampSize.height, lampSize.depth]}
          rotation={[0, lampPositionRight ? -Math.PI / 2 : Math.PI / 2, 0]}
          castShadow
          receiveShadow
        />
        <pointLight
          decay={2}
          position={[
            1 * (lampPositionRight ? 1 : -1),
            lampSize.height - lampSize.height / 2,
            0,
          ]}
          intensity={18}
          distance={50}
        />
      </group>
    </>
  );
};

export default Lamp;
