import React, {useState} from 'react';
import '../../assets/style/SeatSelection.scss'
import Logo from "../Logo";
import Step from "../Step";
import TrainFilter from "../TrainSelection/TrainFilter";
import LastTickets from "../LastTickets";
import Footer from "../Footer";
import SeatList from "./SeatList";
import {useLocation} from "react-router-dom";

export default function SeatSelection() {
  const {state} = useLocation();
  const [leftFilters, setLeftFilters] = useState({})

  console.log(state)

  const setFilters = (items) => {
    setLeftFilters({ ...items })
  }

  return(
    <div className='seat-selection'>
      <Logo type={'seatSelection'}/>
      <Step num={[1]}/>

      <div className='seat-selection__main'>
        <div className='seat-selection__main-leftMenu'>
          <TrainFilter setFilters={setFilters}/>
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