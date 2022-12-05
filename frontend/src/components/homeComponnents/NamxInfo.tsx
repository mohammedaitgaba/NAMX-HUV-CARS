import React from 'react'

function NamxInfo() {
  return (
    <div className='md:px-20 px-5 flex flex-col justify-center items-center pb-12'>
        <div className="font-bold text-7xl pb-12 self-start">
            WE ARE NAMX
        </div>
        <div className="flex flex-col md:flex md:flex-row  w-3/4 justify-between items-center">
            <div className='flex flex-col text-lg max-w-sm'>
                <span className='font-bold mb-3'>UNE GRANDE AUTONOMIE AVEC DE L'ÉNERGIE VERTE</span>
                <p>
                    La voiture NamX bénéficie d'un double réservoir d'hydrogène. 
                    En plus du réservoir fixe, un réservoir amovible composé de 
                    6 capsules d'hydrogène permet à nos consommateurs de s'approvisionner
                    facilement en hydrogène.
                </p>
            </div>
            <div className='w-[70%] min-w-[300px] max-w-[450px]'>
                <img src="Pics/Namx_cars_pics/WeARENamx.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default NamxInfo