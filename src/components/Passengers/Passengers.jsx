import React from 'react';
import '../../assets/style/Passengers.scss'
import Logo from "../Logo";
import Step from "../Step";
import Footer from "../Footer";
import TripDetail from "../TripDetail";
import PassengersList from "./PassengersList";

export default function Passengers() {
  return(
    <div className='passengers'>
      <Logo type={'passengers'}/>
      <Step num={[1, 2]}/>

      <div className='passengers__main'>
        <div className='passengers__main-leftMenu'>
          <TripDetail/>
        </div>

        <div className='passengers__main-rightMenu'>
          <PassengersList/>
        </div>
      </div>

      <Footer/>
    </div>
  )
}