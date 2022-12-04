import React,{useState} from 'react'

function NamxCarBanner() {
    const [ScreenWidth,setScreenWidth] = useState(document.body.clientWidth)

    var onresize = function() {
        setScreenWidth(document.body.clientWidth)
      }
      window.addEventListener("resize", onresize);
  return (
    <div className='bg-tertiary text-quinary sm:h-[65vh] h-[85vh] relative my-6 flex sm:flex-row flex-col justify-between items-center '>
        {/* <div className="w-16 inline-block absolute right-0">
            <div className=" h-11 w-32 bg-quinary -rotate-45 transform origin-top-left"></div>
        </div> */}
        <div className={ScreenWidth>768?'bg-quinary w-16 h-[17rem] -rotate-[75deg] transform origin-top-left absolute right-[477px] top-[-4px]':'hidden'}></div>
        <div className={ScreenWidth>768?'bg-quinary w-16 h-[17rem] -rotate-[105deg] transform origin-bottom-right absolute right-8 top-[-338px]':'hidden'}></div>
        <section className='flex flex-col sm:pl-32  justify-between text-lg	 h-3/5 '>
            <div>
                <p className='font-bold'>Transmission</p>
                <p>PROPULSION OU INTÉGRALE</p>
            </div>
            <div>
                <p className='font-bold'>Vitesse maximum</p>
                <p>250 KM/H</p>
            </div>
            <div>
                <p className='font-bold'>0 à 100 km/h</p>
                <p>4,3 SECONDES</p>
            </div>
        </section>
        <div className='w-80 flex self-end '>
            <img className='' src="Pics/Namx_cars_pics/NamxShowCar.png" alt="Namx_showCar" />
        </div>

        <div className={ScreenWidth>768?'bg-quinary w-16 h-[17rem] -rotate-[80deg] transform origin-top-left absolute left-[283px] top-[352px]':'hidden'}></div>
        <div className={ScreenWidth>768?'bg-quinary w-16 h-[17rem] -rotate-[100deg] transform origin-bottom-right absolute left-[231px] top-[17px]':'hidden'}></div>
    </div>
  )
}

export default NamxCarBanner