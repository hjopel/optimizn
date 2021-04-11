import './App.css';
import { Canvas } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei'
import { useRef, useCallback } from 'react';
import Animation from './components/Animation';

function App() {
  const mouse = useRef([0,0])
    const onMouseMove = useCallback(({clientX: x, clientY: y})=> (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), []);
  return (
    <div onMouseMove={onMouseMove} style={{ width: "100vw", height: "100vh" }}>

      <Canvas>
        <OrbitControls />
        <Animation />
      </Canvas>
      </div>

  );
}

export default App;
