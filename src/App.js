import { Image } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";

function Images() {
  return (
    <group>
      <Image url="./img1.jpg" scale={[4, 1, 1]} />
    </group>
  );
}

function App() {
  return (
    <Canvas>
      <Images />
    </Canvas>
  );
}

export default App;
