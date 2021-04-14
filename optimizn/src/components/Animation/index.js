
import { useRef } from 'react'
import Background from './Background'
import {Shader} from './Shaders/shader'
import {useFrame} from '@react-three/fiber'
import { Text, PerspectiveCamera, OrbitControls, useHelper} from '@react-three/drei';

import { CameraHelper, MathUtils, Camera } from 'three';
export default function Index(props){
    const ref = useRef();
    const camRef = useRef();
    useFrame(({clock})=>{
        const elapsed = clock.getElapsedTime();
        const delta = clock.getDelta()
        ref.current.material.uniforms.uTime.value = elapsed * 0.2;
        // camRef.current.position.x = camRef.current.position.x * Math.cos(0.02) + camRef.current.position.z * Math.sin(0.02);
        // camRef.current.position.z = camRef.current.position.z * Math.cos(0.02) - camRef.current.position.x * Math.sin(0.02);
    })
    // useHelper(camRef, CameraHelper, 1, 'hotpink')
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
                {'optimizn.'}
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