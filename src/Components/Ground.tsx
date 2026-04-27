import * as THREE from "three";

const Ground = () => {
  const textureLoader = new THREE.TextureLoader();
  const diffuse = textureLoader.load(
    "/car-snow/snow_02_1k/snow_02_diff_1k.jpg",
  );
  const alpha = textureLoader.load("/car-snow/alpha.jpg");
  const disp = textureLoader.load("/car-snow/snow_02_1k/snow_02_disp_1k.jpg");
  const diff = textureLoader.load("/car-snow/snow_02_1k/snow_02_diff_1k.jpg");
  const normal = textureLoader.load(
    "/car-snow/snow_02_1k/snow_02_nor_gl_1k.jpg",
  );
  const roughness = textureLoader.load(
    "/car-snow/snow_02_1k/snow_02_rough_1k.jpg",
  );
  const arm = textureLoader.load("/car-snow/snow_02_1k/snow_02_arm_1k.jpg");

  [diffuse, normal, roughness, arm, disp, diff].map((item) => {
    item.wrapS = THREE.RepeatWrapping;
    item.wrapT = THREE.RepeatWrapping;
    item.repeat.set(4, 4);
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[100, 100, 256, 256]} />
      <meshStandardMaterial
        alphaMap={alpha}
        transparent
        map={diffuse}
        normalMap={normal}
        normalScale={new THREE.Vector2(3, 3)}
        roughnessMap={roughness}
        metalness={0.2}
        aoMap={arm}
        displacementMap={disp}
        displacementScale={0.2}
        displacementBias={0.0}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default Ground;
