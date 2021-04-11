
import { Suspense } from 'react'
import Background from './Background'
import { MeshDistortMaterial, Icosahedron } from '@react-three/drei'

export default function Index(props){
    return (
        <>
        <Suspense fallback={null}>
            <ambientLight />
                <Icosahedron args={[1,4]}>
                <MeshDistortMaterial
                    attach="material"
                    distort={1}
                    speed={1}
                    color="#f25042"
                />
                </Icosahedron>
            <Background />
        </Suspense>
        
        </>
    )
}