import React, {useEffect, useState} from 'react';
import '../../assets/style/SeatSelection.scss'
import Logo from "../Logo";
import Step from "../Step";
import TrainFilter from "../TrainSelection/TrainFilter";
import LastTickets from "../LastTickets";
import Footer from "../Footer";
import SeatList from "./SeatList";
import {useLocation, useNavigate} from "react-router-dom";
import UIButton from "../UIComponents/UIButton";

export default function SeatSelection() {
  const {state} = useLocation();
  const navigate = useNavigate();

  const [leftFilters, setLeftFilters] = useState({})
  const [trainInfo, setTrainInfo] = useState({})
  const [passInfo, setPassInfo] = useState({})

  const setFilters = (items) => {
    setLeftFilters({ ...items })
  }

  const goToPass = () => {
    navigate('/passengers', { state: {...state, passInfo}});
  }

  const setSeatsInfoArrival = (v) => {
    setPassInfo({...passInfo, arrival: v})
  }

  const setSeatsInfoDeparture = (v) => {
    setPassInfo({...passInfo, departure: v})
  }

  useEffect(() => {
    setLeftFilters({ ...state.leftFilters })
    setTrainInfo({...state.train})
  }, []);

  return(
    <div className='seat-selection'>
      <Logo type={'seatSelection'}/>
      <Step num={[1]}/>

      <div className='seat-selection__main'>
        <div className='seat-selection__main-leftMenu'>
          <TrainFilter filters={state.leftFilters} setFilters={setFilters}/>
          <LastTickets/>
        </div>

        <div className='seat-selection__main-rightMenu'>
          <div className='seat-list__title font-30'>Выбор мест</div>
          {trainInfo?.arrival && <SeatList setData={setSeatsInfoArrival} trainType={'arrival'} train={trainInfo?.arrival}/>}
          {trainInfo?.departure && <SeatList setData={setSeatsInfoDeparture} trainType={'departure'} train={trainInfo?.departure}/>}

          <div className='seat-selection-btn'>
            <UIButton label={'Далее'} color={'primary'} variant={'contained'} onClick={goToPass}/>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}