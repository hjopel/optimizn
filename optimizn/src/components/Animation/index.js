
import { useRef } from 'react'
import Background from './Background'
import {Shader} from './Shaders/shader'
import {useFrame} from '@react-three/fiber'
import { Text } from '@react-three/drei';
export default function Index(props){
    const ref = useRef();
    useFrame(({clock})=>{
        ref.current.material.uniforms.uTime.value = clock.getElapsedTime() * 0.2;
    })
    return (
        <>
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <ambientLight intensity={0.4}/>
        <spotLight
          castShadow
          angle={0.3}
          penumbra={1}
          position={[0, 10, 20]}
          intensity={5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <mesh ref={ref} castShadow receiveShadow scale={0.5} position={[2.0,0.0,0.0]}>
            <icosahedronBufferGeometry attach="geometry" args={[1,30]} />
            <shaderMaterial args={[Shader]}/>
        </mesh>
        <group >
            <Text 
                position={[-2.0,0.0,0.0]}
                color={'#000000'}
                fontSize={0.8}
                >
                optimizn.
            </Text>
            <Text
                position={[-1.5, -1.0, 0.0]}
                color={'#000000'}
                fontSize={0.4}
                >
                {'innovative and\ncreative development'}
            </Text>
        </group>
        </>
    )
}