import React, { Suspense } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import PreOrder from "./pages/PreOrder/PreOrder";
import Model from "./pages/anumation/Model";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SphereAnimated from "./pages/anumation/SphereAnimated";
import { Car } from "./pages/anumation/Car";

function App() {
    return (
        <div className="App font-body">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/preOrder" element={<PreOrder />} />
                    <Route path="/model" element={<Model />} />
                </Routes>
            </BrowserRouter>

            <Canvas className="flex justify-center">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Suspense fallback={null}>
                    <Model />
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

export default App;
