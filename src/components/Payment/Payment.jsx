import React from 'react';
import '../../assets/style/Payment.scss'
import Logo from "../Logo";
import Step from "../Step";
import TripDetail from "../TripDetail";
import Footer from "../Footer";
import PaymentData from "./PaymentData";

export default function Payment() {
  return(
    <div>
      <div className='payment'>
        <Logo type={'passengers'}/>
        <Step num={[1, 2, 3]}/>

        <div className='payment__main'>
          <div className='payment__main-leftMenu'>
            <TripDetail/>
          </div>

          <div className='payment__main-rightMenu'>
            <PaymentData/>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  )
}