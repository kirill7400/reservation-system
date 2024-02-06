import React from 'react';
import Logo from "../Logo";
import Step from "../Step";
import Footer from "../Footer";
import TrainFilter from "./TrainFilter";
import TrainList from "./TrainList";
import '../../assets/style/TrainSelection.scss'
import LastTickets from "../LastTickets";
import UIPagination from "../UIComponents/UIPagination";

export default function TrainSelection() {
  return (
    <div className='train-selection'>
      <Logo type={'trainSelection'}/>
      <Step num={ [1] }/>

      <div className='train-selection__main'>
        <div className='train-selection__main-leftMenu'>
          <TrainFilter/>
          <LastTickets/>
        </div>

        <div className='train-selection__main-rightMenu'>
          <TrainList/>
          <UIPagination/>
        </div>
      </div>

      <Footer/>
    </div>
  )
}