import React from 'react';
import '../../assets/style/Passengers.scss'
import Logo from "../Logo";
import Step from "../Step";
import Footer from "../Footer";
import TripDetail from "../TripDetail";
import PassengersList from "./PassengersList";
import {useLocation} from "react-router-dom";

export default function Passengers() {
  const {state} = useLocation();

  return(
    <div className='passengers'>
      <Logo type={'passengers'}/>
      <Step num={[1, 2]}/>

      <div className='passengers__main'>
        <div className='passengers__main-leftMenu'>
          <TripDetail tripData={{...state.train, ...state.leftFilters, passInfo: state.passInfo}}/>
        </div>

        <div className='passengers__main-rightMenu'>
          <PassengersList passengersData={state.passInfo}/>
        </div>
      </div>

      <Footer/>
    </div>
  )
}