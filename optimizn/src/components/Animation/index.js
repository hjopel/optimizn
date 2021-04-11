
import { Suspense, useRef } from 'react'
import Background from './Background'
import {Shader} from './Shaders/shader'
import {useFrame} from '@react-three/fiber'
export default function Index(props){
    const ref = useRef();
    useFrame(({clock})=>{
        console.log(ref.current.material)
        ref.current.material.uniforms.uTime.value = clock.getElapsedTime();
    })
    return (
        <>
        <Suspense fallback={null}>
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <ambientLight intensity={0.4} />
        <spotLight
          castShadow
          angle={0.3}
          penumbra={1}
          position={[0, 10, 20]}
          intensity={5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
            <mesh ref={ref}>
                <icosahedronBufferGeometry attach="geometry" args={[1,6]} />
                <shaderMaterial args={[Shader]} />
            </mesh>
            <Background />
        </Suspense>
        
        </>
    )
}