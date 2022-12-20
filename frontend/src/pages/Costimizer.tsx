import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import PrimaryButton from "../layouts/button/PrimaryButton";
import { proxy, useSnapshot } from "valtio";

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import sound from "../assets/Sounds/namx_engine1.mp3";
import sound2 from "../assets/Sounds/namx_engine2.mp3";

const Costimizer = () => {
  const CarParts = proxy({
    current: null,
    items: {
      bodyColor: "#111111",
      windowsColor: "#111111",
      carSkeleton: "#111111",
      backSkeleton: "#111111",
      frontSkeleton: "#111111",
      backLightsAndLogo: "white",
      frontLights: "",
      wheels: "#111111",
    },
  });
  const [carData, setCarData] = useState({
    bodyColor: "",
    windowsColor: "",
    carSkeleton: "",
    backSkeleton: "#111111",
    frontSkeleton: "",
    backLightsAndLogo: "",
    frontLights: "",
    wheels: "",
    engine_type: "",
  });
  const {
    bodyColor,
    windowsColor,
    carSkeleton,
    backSkeleton,
    backLightsAndLogo,
    frontLights,
    wheels,
    engine_type,
  } = carData;
  const handleChange = (e: any) => {
    setCarData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(carData);

  const ok = () => {};

  function Car(props: JSX.IntrinsicElements["group"]) {
    const ref = useRef();
    const myCar = useSnapshot(CarParts);
    const [hovered, sethovered] = useState(null);
    useFrame(()=>(ref.current.rotation.z +=0.008))

    const { nodes, materials } = useGLTF(
      "../../../public/model/car.gltf"
    ) as GLTFResult;

    return (
      <group {...props} dispose={null}>
        <group
          ref={ref}
          position={[-0.01, 0.8, -0.5]}
          rotation={[-Math.PI / 2.1, 0, 0]}
          scale={1}
          //   onPointerOver = {(e)=>{e.stopPropagation(),sethovered(e.eventObject.group),console.log(CarParts.current);}}
          //   onPointerOut = {(e)=>(e.intersections.length === 0 && sethovered(null))}
          //   onPointerDown = {(e)=>(e.stopPropagation(),CarParts.current = e.eventObject.material)}
          //   onPointerMissed = {(e)=>(CarParts.current = null)}
        >
          <mesh
            geometry={nodes.window_rear_0.geometry}
            material={materials.window}
          />
          {/* windowsShield */}
          <group position={[0, 0, 0.01]}>
            <mesh
              material-color={windowsColor}
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
              material-color={bodyColor}
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
            material-color={carSkeleton}
            geometry={nodes.bumper_front004_2.geometry}
            material={materials.plastic}
          />
          {/* front lights */}
          <group rotation={[-0.01, 0, 0]} scale={1.04}>
            <mesh
              material-color={frontLights}
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
            material-color={backSkeleton}
            geometry={nodes.boot002_0.geometry}
            // material={materials.paint}
          />
          {/* backlights and logo*/}
          <group position={[0.01, 3.58, 0.11]}>
            <mesh
              material-color={backLightsAndLogo}
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
              material-color={wheels}
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
          <mesh geometry={nodes.boot007_0.geometry} material={materials.logo} />
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
            geometry={nodes.boot008_0.geometry}
            material={materials.paint}
          />
          <mesh
            geometry={nodes.boot009_0.geometry}
            material={materials.silver}
          />
          <mesh
            geometry={nodes.boot010_0.geometry}
            material={materials.plastic}
          />
          <mesh geometry={nodes.boot011_0.geometry} material={materials.coat} />
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
  function handleSound(e: String) {
    e === "engine1" ? new Audio(sound).play() : new Audio(sound2).play();
  }
  useGLTF.preload("../../../public/model/car.gltf");

  return (
    <div className="h-screen relative p-5">
      <h1 className="text-center text-xl font-bold">As You wish it</h1>

      <Canvas className="flex justify-center">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Car />
        </Suspense>
      </Canvas>
      <div className="absolute top-[85%] left-[40%]">
        <PrimaryButton
          children={"Submit"}
          onClick={() => ok()}
          width={"w-60"}
        />
      </div>
      {/* bodyColor,windowsColor,carSkeleton,backSkeleton,backLightsAndLogo,frontLights,wheels */}
      <div className="absolute top-14">
        <div>
          <p>full car</p>
          <input
            type="color"
            name="bodyColor"
            className=""
            value={bodyColor}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>back car</p>
          <input
            type="color"
            name="backSkeleton"
            value={backSkeleton}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>windows</p>
          <input
            type="color"
            name="windowsColor"
            value={windowsColor}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Attachment</p>
          <input
            type="color"
            name="carSkeleton"
            value={carSkeleton}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>back Lights And Logo</p>
          <input
            type="color"
            name="backLightsAndLogo"
            value={backLightsAndLogo}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="absolute right-4 top-14">
        <div>
          <p>Wheels Color</p>
          <input
            type="color"
            name="wheels"
            value={wheels}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>front Lights</p>
          <input
            type="color"
            name="frontLights"
            value={frontLights}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Engine type</p>
          <select
            name="engine_type"
            value={engine_type}
            onChange={(e) => {
              handleChange;
              handleSound(e.target.value);
            }}
          >
            <option value="" selected>
              select engine __
            </option>
            <option value="engine 1">engine 1</option>
            <option value="engine 2">engine 2</option>
          </select>
        </div>
        {/* <div>
          <p>back car Color</p>
          <input
            type="color"
            name="backSkeleton"
            value={backSkeleton}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>back car Color</p>
          <input
            type="color"
            name="backSkeleton"
            value={backSkeleton}
            onChange={handleChange}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Costimizer;
