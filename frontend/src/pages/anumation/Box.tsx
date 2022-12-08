import React from "react";

import { useLoader } from "@react-three/fiber";
import texture from "../../assets/images/cars/namx-ban.webp"

const Box = () => {
    
    return (
        <mesh rotation={[90, 0, 20]}>
            <boxBufferGeometry attach='geometry' args={[3, 3, 3]} />
            <meshNormalMaterial attach='material' />
        </mesh>
    );
};

export default Box;
