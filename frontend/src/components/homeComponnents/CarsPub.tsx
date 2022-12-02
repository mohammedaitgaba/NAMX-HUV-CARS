import React from "react";

function CarsPub() {
  const cars:{ pic_url: string, pic_description: string,title:string }[] = [
    {
        pic_url: `Pics/Namx_cars_pics/NamX-HUV.jpg`,
        pic_description: "Namx_cars",
        title : "A Muscular Shape"
    },
    {
        pic_url: `Pics/Namx_cars_pics/NamX-HUV-rear-2.jpg`,
        pic_description: "Namx_cars",
        title : "A Muscular Shape"
    },
    {
        pic_url: `Pics/Namx_cars_pics/NamX-HUV-front-three-quarter.jpg`,
        pic_description: "Namx_cars",
        title : "Trying Something New"
    },
  ];
  return (
    <div className="Cars_container flex flex-wrap items-center justify-around lg:px-24 py-12 ">
        {
            cars.map((car,i)=>(
                <div className="Car px-4 w-80 flex flex-col justify-center items-center" key={i}>
                <img src={car.pic_url} alt={car.pic_description} />
                <p>{car.title}</p>
              </div>
            ))
        }

    </div>
  );
}

export default CarsPub;
