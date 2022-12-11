import React, { Suspense,useRef,useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from '@react-three/drei'
import PrimaryButton from "../layouts/button/PrimaryButton";
import {proxy,useSnapshot} from "valtio"
const Costimizer = () => {

    const [first, setfirst] = useState({
        primary: "#BD3944", // red (dark)
        secondary: "#042E27", // green (dark)
        tertiary: "#364966", // blue (dark)
        // the rest follow text color when dark mode is enabled you can change the colors to match your theme
        quaternary: "#111111", // black (dark) -> for text
        quinary: "white", // white -> for text
        senary: "#232122", // bg color (dark)
        gray: "#F4F4F4"
    })

    const CarParts =proxy({
        current : null,
        items :{
            bodyColor :"#111111",
            windowsColor : "#111111",
            carSkeleton : "#111111",
            backSkeleton : "#111111",
            frontSkeleton : "#111111",
            backLightsAndLogo : "white",
            frontLights :"",
            wheels : "#111111"
        }
    })

    const ok =()=>{

        
    }
    
    function Car (props: JSX.IntrinsicElements['group']) {
        const ref = useRef()
        const myCar = useSnapshot(CarParts)
        console.log(myCar.items);
        
        // useFrame(()=>(ref.current.rotation.z +=0.008))

        
          const { nodes, materials } = useGLTF('../../../public/model/car.gltf') as GLTFResult
        
          return (
              <group {...props} dispose={null} >
                  <group ref={ref}
                      position={[-0.01, 0.8, -0.5]}
                      rotation={[-Math.PI / 2.1, 0, 0]}
                      scale={1}
                  >
                      <mesh 
                          geometry={nodes.window_rear_0.geometry}
                          material={materials.window}
                      />
                      {/* windowsShield */}
                      <group position={[0, 0, 0.01]}>
                        
                          <mesh
                                material-color = {myCar.items.windowsColor}
                              geometry={nodes.windshield_0.geometry}
                              material={materials.window}
                              
                          />
                          <mesh
                          
                              geometry={nodes.windshield_1.geometry}
                              material={materials.plastic}
                          />
                      </group>
        
                      {/* full car  */}
                      <group
                          position={[-1.05, 3.51, -0.13]}
                          rotation={[-1.44, -0.62, 0.78]}
                          scale={0.02}
                      >
                          <mesh
                                material-color={myCar.items.bodyColor}
                              geometry={nodes.Plane002_0.geometry}
                              material={materials.paint}
                          />
                      </group>
                      <group
                          position={[0.44, 3.72, -0.12]}
                          rotation={[-1.48, 0.1, 0.8]}
                          scale={0.02}
                      >
                          <mesh
                              geometry={nodes.Plane003_0.geometry}
                              material={materials.paint}
                          />
                      </group>
                      <group
                          position={[-0.49, 3.68, -0.33]}
                          rotation={[-1.42, -0.04, 0.8]}
                          scale={0.06}
                      >
                          <mesh
                              geometry={nodes.Plane004_0.geometry}
                              material={materials.paint}
                          />
                      </group>
                      <mesh
                          geometry={nodes.boot_0.geometry}
                          material={materials.full_black}
                      />
                      <mesh
                          geometry={nodes.underbody_0.geometry}
                          material={materials.full_black}
                      />
                      <group position={[0, 0, 0.03]}>
                          <mesh
                              geometry={nodes.Cylinder000_0.geometry}
                              material={materials.silver}
                          />
                          <mesh
                              geometry={nodes.Cylinder000_1.geometry}
                              material={materials.plastic}
                          />
                          <mesh
                              geometry={nodes.Cylinder000_2.geometry}
                              material={materials.rubber}
                          />
                          <mesh
                              geometry={nodes.Cylinder000_3.geometry}
                              material={materials["Material.001"]}
                          />
                      </group>
                      <group position={[0, 0, -1.05]} scale={[6.95, 9.79, 7.5]}>
                          <mesh
                              geometry={nodes.Plane_0.geometry}
                              material={materials.Material}
                          />
                      </group>
                      <group
                          position={[0.04, -1.56, 0.33]}
                          rotation={[0.71, -0.07, -0.24]}
                          scale={0.01}
                      >
                          <mesh
                              geometry={nodes.Cube001_0.geometry}
                              material={materials.plastic}
                          />
                      </group>
                      <mesh
                          geometry={nodes.bumper_front004_0.geometry}
                          material={materials.silver}
                      />
                      <mesh
                      
                      geometry={nodes.bumper_front004_1.geometry}
                          material={materials.lights}
                      />
                      {/* car skeleton */}
                      <mesh
                            material-color={myCar.items.carSkeleton}
                          geometry={nodes.bumper_front004_2.geometry}
                          material={materials.plastic}
                      />
                      {/* front lights */}
                      <group rotation={[-0.01, 0, 0]} scale={1.04}>
                          <mesh
                          material-color = {myCar.items.frontLights}
                              geometry={nodes.bumper_front007_0.geometry}
                              material={materials.glass}
                          />
                      </group>
                      <mesh
                      
                          geometry={nodes.boot001_0.geometry}
                          material={materials.paint}
                          
                      />
                      {/* mid back of the car */}
                      <mesh
                        material-color = {myCar.items.backSkeleton}
                          geometry={nodes.boot002_0.geometry}
                        //   material={materials.paint}
                      />
                      {/* backlights and logo*/}
                      <group position={[0.01, 3.58, 0.11]}>
                          <mesh
                                material-color = {myCar.items.backLightsAndLogo}
                              geometry={nodes.Plane001_0.geometry}
                              material={materials.tex_shiny}
                          />
                      </group>
                      {/* other windows */}
                      <mesh
                             
                          geometry={nodes.boot003_0.geometry}
                          material={materials.tex_shiny}
                      />
                      <mesh
                      
                          geometry={nodes.boot004_0.geometry}
                          material={materials.window}
                      />
                      <group position={[0, 0, 0.03]}>
                          <mesh
                                
                              geometry={nodes.Cylinder001_0.geometry}
                              material={materials.silver}
                          />
                          <mesh
                              geometry={nodes.Cylinder001_1.geometry}
                              material={materials.plastic}
                          />
                          {/* car wheels */}
                          <mesh
                                material-color ={myCar.items.wheels}
                              geometry={nodes.Cylinder001_2.geometry}
                              material={materials.rubber}
                          />
                          {/* car brakes */}
                          <mesh
                              geometry={nodes.Cylinder001_3.geometry}
                              material={materials["Material.001"]}
                          />
                      </group>
                      <mesh
                          geometry={nodes.boot005_0.geometry}
                          material={materials.paint}
                      />
                      <mesh
                          geometry={nodes.boot006_0.geometry}
                          material={materials.full_black}
                      />
                      <mesh
                          geometry={nodes.window_rear001_0.geometry}
                          material={materials.full_black}
                      />
                      {/* logo */}
                      <mesh
                          geometry={nodes.boot007_0.geometry}
                          material={materials.logo}
                      />
                      <group
                          position={[0, 3.7, -0.29]}
                          rotation={[0.11, 0, 0]}
                          scale={[0.39, 0.39, 0.36]}
                      >
                        {/* blaka dyal Car */}
                          <mesh
                              geometry={nodes.Plane005_0.geometry}
                              material={materials.license}
                          />
                      </group>
                      <group
                          position={[0, -3.75, -0.43]}
                          rotation={[0.08, 0, Math.PI]}
                          scale={[0.4, 0.4, 0.36]}
                      >
                          <mesh
                          
                              geometry={nodes.Plane006_0.geometry}
                              material={materials.license}
                          />
                      </group>
                      {/* frontcar */}
                      <mesh
                          material-color={myCar.items.frontSkeleton}
                          geometry={nodes.boot008_0.geometry}
                        //   material={materials.paint}
                      />
                      <mesh
                          geometry={nodes.boot009_0.geometry}
                          material={materials.silver}
                      />
                      <mesh
                          geometry={nodes.boot010_0.geometry}
                          material={materials.plastic}
                      />
                      <mesh
                          geometry={nodes.boot011_0.geometry}
                          material={materials.coat}
                      />
                      <mesh
                          geometry={nodes.boot011_0_1.geometry}
                          material={materials.coat}
                      />
                      <group scale={[0.33, 0.32, 0.32]}>
                        {/* down inside the car */}
                          <mesh
                              geometry={nodes.Cube002_0.geometry}
                              material={materials.full_black}
                          />
                      </group>
                  </group>
              </group>
          );
        }
        
        useGLTF.preload('../../../public/model/car.gltf')
  return (
    <div className='h-screen relative'>
        <h1>its all yours</h1>

        <Canvas className="flex justify-center" >
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null} >
                <Car />
            </Suspense>
        </Canvas>
        <div className='absolute top-[85%] left-[40%]'>
            <PrimaryButton 
                    children={"Submit"}
                    onClick={() => ok()}
                    width={"w-60"}
                />
        </div>

</div>
  )
}

export default Costimizer