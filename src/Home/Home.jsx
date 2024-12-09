import React from 'react'
import Banner from './Banner'
import HomeCatugry from './HomeCatugry'
import HomeProductCatugry from './HomeProductCatugry'
import RegisterPage from './RegisterPage'
import LocationSpread from './LocationSpread'
import Merchant from './Merchant'
import LearnAnywhere from './LearnAnyWhere'
import Sponser from './Sponser'


function Home() {
  return (
    <div >
      <Banner/>
      <HomeCatugry/>
      <HomeProductCatugry/>
      <RegisterPage/>
      <LocationSpread/>
      <Merchant/>
      <LearnAnywhere/>
      <Sponser/>
      
    </div>
  )
}

export default Home
