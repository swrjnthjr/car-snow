import Lamp from "./Lamp";

interface LampRowProps {
  spacing?: number;
  roadLength?: number;
  roadWidth?: number;
}

const LampRow = ({
  spacing = 10,
  roadLength = 100,
  roadWidth = 4,
}: LampRowProps) => {
  const lamps = [];
  const lampDistance = roadWidth / 2 + 1; // Position lamps to the side of the road
  const numLamps = Math.floor(roadLength / spacing) + 1;
  const startZ = -roadLength / 2;

  // Left side lamps
  for (let i = 0; i < numLamps; i++) {
    const z = startZ + i * spacing;
    lamps.push(
      <group key={`lamp-left-${i}`} position={[-lampDistance, 0, z]}>
        <Lamp lampPositionRight />
      </group>,
    );
  }

  // Right side lamps
  for (let i = 0; i < numLamps; i++) {
    const z = startZ + i * spacing; // Stagger right side lamps
    lamps.push(
      <group key={`lamp-right-${i}`} position={[lampDistance, 0, z]}>
        <Lamp />
      </group>,
    );
  }

  return <group>{lamps}</group>;
};

export default LampRow;
