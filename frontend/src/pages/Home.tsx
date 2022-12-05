import React from 'react'
import CarsPub from '../components/homeComponnents/CarsPub'
import Banner from '../components/homeComponnents/Banner'
import NamxInfo from '../components/homeComponnents/NamxInfo'
import NamxCarBanner from '../components/homeComponnents/NamxCarBanner'
import CostimizerPub from '../components/homeComponnents/CostimizerPub'
const Home=()=>{
  return (
    <>
      <Banner/>
      <CarsPub/>
      <NamxInfo/>
      <NamxCarBanner/>
      <CostimizerPub/>
    </>
  )
}

export default Home