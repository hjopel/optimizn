import { Canvas } from '@react-three/fiber';
import Animation from './Animation';

export default function Home(props) {
    return (
      <div  style={{ width: "100vw", height: "100vh" }}>
        <Canvas>
          <Animation />
        </Canvas> 
      </div>
    );
  }