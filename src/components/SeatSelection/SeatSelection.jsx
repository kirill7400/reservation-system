import React from 'react';
import '../../assets/style/SeatSelection.scss'
import Logo from "../Logo";
import Step from "../Step";
import TrainFilter from "../TrainSelection/TrainFilter";
import LastTickets from "../LastTickets";
import Footer from "../Footer";
import SeatList from "./SeatList";

export default function SeatSelection() {
  return(
    <div className='seat-selection'>
      <Logo type={'seatSelection'}/>
      <Step num={[1]}/>

      <div className='seat-selection__main'>
        <div className='seat-selection__main-leftMenu'>
          <TrainFilter/>
          <LastTickets/>
        </div>

        <div className='seat-selection__main-rightMenu'>
          <SeatList/>
        </div>
      </div>

      <Footer/>
    </div>
  )
}