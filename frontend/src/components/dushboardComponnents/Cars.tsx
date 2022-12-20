import React,{useState,useEffect} from 'react'
import DataTable from './DataTable'
import axios from 'axios'
const Cars = () => {
  const [Cars, setCars] = useState<any>([])
  useEffect(()=>{
    getAllCars()
  },[])
  const getAllCars = async()=>{
    setCars([])    
    await axios.get('http://localhost:5000/api/v1/NAMAX/Cars')
    .then(res=>res.data)
    .then(data=>data.forEach(element=>{
      setCars(prevArray => [...prevArray,element])
      console.log(element);
      
    }))
    .catch(e=>console.log(e.message)
    )
  }
  if (Cars) {
    console.log(Cars);
    
  }
  const updateCar = ()=>{
    console.log("heeere");
    
  }  
  const deleteCar = ()=>{
    console.log("heeere");
    
  }

  return (
    <div className='flex items-center w-full '>
        <DataTable data = {Cars} onUpdate={()=>updateCar()} ondelete={()=>deleteCar()}/>
    </div>
  )
}

export default Cars