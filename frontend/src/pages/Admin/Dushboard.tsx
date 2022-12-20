import React,{useState} from 'react'
import Sidebar from '../../components/dushboardComponnents/SideBar'
import Statistics from '../../components/dushboardComponnents/Statistics'
import Cars from '../../components/dushboardComponnents/Cars'
const Dushboard = () => {
    const [componnent, setComponnent] = useState(localStorage.getItem('componnent'));
    const componnentSwitcher = name => {
        // 👇️ take parameter passed from Child component
        localStorage.setItem('componnent',name)
        setComponnent(name)
        
      };
  return (
    <div className="flex bg-gray-100 w-full">
            <Sidebar componnentSwitcher={componnentSwitcher}/>
            <div className='flex flex-col w-full justify-start items-center'>
              <Statistics/>
              {
                componnent ==="Cars" ? <Cars/>:null 
              }
            </div>
    </div>
  )
}

export default Dushboard