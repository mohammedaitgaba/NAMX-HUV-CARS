import React, { Suspense } from 'react'


import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SphereAnimated from "../../pages/anumation/SphereAnimated";
import Box from "../../pages/anumation/Box";
import { Car } from "../../pages/anumation/Car";

const IndexModel = () => {
    return (
        <div className='h-screen'>
            <Canvas className="flex justify-center">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Suspense fallback={null}>
                    <Box />
                </Suspense>
            </Canvas>

            <Canvas className="flex justify-center">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Suspense fallback={null}>
                    <SphereAnimated />
                </Suspense>
            </Canvas>
            <Canvas className="flex justify-center">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Suspense fallback={null}>
                    <Car />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default IndexModel