const Lights = () => {
  return (
    <>
      <directionalLight
        position={[0, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      {/* <ambientLight intensity={0.5} /> */}
    </>
  );
};

export default Lights;
