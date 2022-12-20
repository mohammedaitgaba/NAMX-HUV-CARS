import React from "react";
import CarBackground from "../../assets/gifs/homeBackground.gif";
import PrimaryButton from "../../layouts/button/PrimaryButton.jsx";
function  Banner() {
  const GotoBuyPage = () => {
    console.log("namx");
  };
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div
        className="bg-senary h-screen  w-full flex flex-col gap-10 top-6 bg-fixed	 justify-center absolute items-center blur-sm z-[-1]"
        style={{
          backgroundImage: `url(${CarBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute w-full h-screen bg-quaternary opacity-60"></div>
      </div>
      <div className="text-8xl text-quinary mb-10 font-bold">NAMX</div>
      <PrimaryButton
        children={"Buy now"}
        onClick={() => GotoBuyPage()}
        width={"w-60"}
      />
    </div>
  );
}

export default Banner;
