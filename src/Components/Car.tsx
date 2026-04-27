import { CarScene } from "../Car_scene";

const Car = () => {
  return (
    <group position={[1, 0, 0]}>
      {/* <primitive
        object={clonedScene}
        scale={[0.01, 0.01, 0.01]}
        rotation={[0, -Math.PI / 2, 0]}
        castShadow
        receiveShadow
      /> */}
      <CarScene
        scale={[0.01, 0.01, 0.01]}
        rotation={[0, -Math.PI / 2, 0]}
        castShadow
        receiveShadow
      />
    </group>
  );
};

export default Car;
