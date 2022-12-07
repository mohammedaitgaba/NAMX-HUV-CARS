import React from "react";

function NamxCarBanner() {
  return (
    <div className="bg-tertiary text-quinary sm:h-[400px] h-[70vh] relative my-6 flex sm:flex-row flex-col justify-between items-center ">
      <div className="bg-quinary w-16 h-[17rem] -rotate-[75deg] transform origin-top-left absolute right-[477px] top-[-4px] sm:block hidden"></div>
      <div className="bg-quinary w-16 h-[17rem] -rotate-[105deg] transform origin-bottom-right absolute right-8 top-[-338px] sm:block hidden"></div>

      <div className="bg-quinary w-16 h-[17rem] -rotate-[80deg] transform origin-top-left absolute left-[283px] top-[416px] sm:block hidden"></div>
      <div className="bg-quinary w-16 h-[17rem] -rotate-[100deg] transform origin-bottom-right absolute left-[231px] top-[81px] sm:block hidden"></div>
      <section className="flex flex-col sm:pl-32 sm:pt-0 pt-8  justify-around text-lg	 h-3/5 ">
        <div>
          <p className="font-bold">Transmission</p>
          <p>PROPULSION OU INTÉGRALE</p>
        </div>
        <div>
          <p className="font-bold">Vitesse maximum</p>
          <p>250 KM/H</p>
        </div>
        <div>
          <p className="font-bold">0 à 100 km/h</p>
          <p>4,3 SECONDES</p>
        </div>
      </section>
      <div className="w-80 flex self-end ">
        <img
          className=""
          src="Pics/Namx_cars_pics/NamxShowCar.png"
          alt="Namx_showCar"
        />
      </div>

    </div>
  );
}

export default NamxCarBanner;
