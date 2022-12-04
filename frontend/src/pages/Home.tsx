import React from 'react'
import CarsPub from '../components/homeComponnents/CarsPub'
import Banner from '../components/homeComponnents/Banner'
import NamxInfo from '../components/homeComponnents/NamxInfo'
import NamxCarBanner from '../components/homeComponnents/NamxCarBanner'
const Home=()=>{
  return (
    <>
      <Banner/>
      <CarsPub/>
      <NamxInfo/>
      <NamxCarBanner/>
    </>
  )
}

export default Home