import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ground from "./Components/Ground";
import Road from "./Components/Road";
import Sky from "./Components/Sky";
import Lights from "./Lights";
import Car from "./Components/Car";
import Rain from "./Components/Rain";

const App = () => {
  return (
    <Canvas
      camera={{
        position: [0, 5, 10],
        fov: 60,
        far: 200,
        near: 1,
      }}
      shadows
    >
      <fog attach="fog" args={["#b5bfc5", 1, 80]} />
      <Sky />
      <Road />
      <Car />
      <Lights />
      <Rain />
      <OrbitControls />
      <Ground />
    </Canvas>
  );
};

export default App;
