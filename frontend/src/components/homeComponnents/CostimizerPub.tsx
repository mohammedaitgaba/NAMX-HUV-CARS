import React from 'react'
import PrimaryButton from '../../layouts/button/PrimaryButton.jsx'

function CostimizerPub() {
    const GotoCostimizerPage= ()=>{
        console.log("here");
        
    }
  return (
    <>
    <div className='md:px-20 px-5 flex flex-col justify-center items-center pb-12 pt-10'>
    <hr className="w-11/12 h-5" />
        <div className="font-bold text-7xl pb-12 self-start">
             Costimize it
        </div>
        <div className='self-end relative hover:cursor-pointer hover:text-primary'>
            Costimize it
        <div className="[grid-area:1/1] absolute bottom-0 right-0 flex items-center  ">
        </div>
        </div>
        <div className="flex flex-col  md:flex md:flex-row  w-3/4  justify-between items-center">
            <div className='w-[70%] min-w-[300px] max-w-[450px]'>
                <img src="Pics/Namx_cars_pics/nissanjuke.gif" alt="" />
            </div>
            <div className='flex flex-col text-lg max-w-sm pt-6 pl-6 h-[45vh]'>
                <span className='font-bold mb-3'>You didn’t like the actual design no Worries!</span>
                <p>
                Now in Namx you can costimize your Namx car change it colors the engine 
                the max speed and much more what are you waiting for try it now .
                </p>
                <div className='pt-8'>
                    <PrimaryButton children={"Costimize it"} onClick={()=>GotoCostimizerPage()} width={"w-2/4"}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CostimizerPub