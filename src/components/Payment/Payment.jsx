import React, {useState} from 'react';
import '../../assets/style/Payment.scss'
import Logo from "../Logo";
import Step from "../Step";
import TripDetail from "../TripDetail";
import Footer from "../Footer";
import PaymentData from "./PaymentData";
import {useLocation} from "react-router-dom";
import PaymentConfirmation from "./PaymentConfirmation";

export default function Payment() {
  const {state} = useLocation();
  const [payData, setPayData] = useState({})
  const [confirmation, setConfirmation] = useState(false)
  const [step, setStep] = useState([1, 2, 3])


  const setPaymentData = (v) => {
    setPayData(v)
  }

  const setConf = (v) => {
    setConfirmation(true)
    setStep([1, 2, 3, 4])
  }

  return(
    <div>
      <div className='payment'>
        <Logo type={'passengers'}/>
        <Step num={step}/>

        <div className='payment__main'>
          <div className='payment__main-leftMenu'>
            <TripDetail tripData={{...state.train, ...state.leftFilters, passInfo: state.passInfo}}/>
          </div>

          <div className='payment__main-rightMenu'>
            {
              !confirmation ? <PaymentData setPaymentData={setPaymentData} setConf={setConf}/> :
                <PaymentConfirmation trainData={state.train} passInfo={state.passInfo} users={state.users} payData={payData} state={state} />
            }

          </div>
        </div>

        <Footer/>
      </div>
    </div>
  )
}