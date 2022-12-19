import React,{useState} from 'react'
import Sidebar from '../../components/dushboardComponnents/SideBar'
import Statistics from '../../components/dushboardComponnents/Statistics'
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
            <Statistics/>
    </div>
  )
}

export default Dushboard