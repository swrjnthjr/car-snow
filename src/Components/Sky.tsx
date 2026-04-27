import { Sky as DreiSky } from "@react-three/drei"; // Import the Sky helper

const Sky = () => {
  return (
    <DreiSky
      turbidity={20}
      rayleigh={0.3}
      mieCoefficient={0.005}
      mieDirectionalG={0.8}
      sunPosition={[100, 30, 100]}
      distance={2000000} // Camera distance
      inclination={1} // Sun elevation (0 = horizon, 1 = overhead)
      azimuth={1} // Sun rotation around the horizon
    />
  );
};

export default Sky;
