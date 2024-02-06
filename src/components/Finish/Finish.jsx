import React from 'react';
import '../../assets/style/Finish.scss'
import Logo from "../Logo";
import Step from "../Step";
import TripDetail from "../TripDetail";
import Footer from "../Footer";
import FinishData from "./FinishData";

export default function Finish() {
  return(
    <div>
      <div className='finish'>
        <Logo type={'finish'}/>
        <Step num={[1, 2, 3]}/>

        <div className='finish__main'>
          <div className='finish__main-leftMenu'>
            <TripDetail/>
          </div>

          <div className='finish__main-rightMenu'>
            <FinishData/>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  )
}