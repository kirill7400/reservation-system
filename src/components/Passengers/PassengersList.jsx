import React, {useEffect, useState} from 'react';
import '../../assets/style/PassengersList.scss'
import PassengerItem from "./PassengerItem";
import UIButton from "../UIComponents/UIButton";
import {useLocation, useNavigate} from "react-router-dom";

export default function PassengersList({ passengersData }) {
  const {state} = useLocation();
  const navigate = useNavigate();

  const [componentId, setComponentId] = useState(0)
  const [data, setData] = useState({ passenger1: {} })
  const [components, setComponent] = useState([])

  const addPassenger = () => {
    setComponentId(componentId + 1)
    let i = componentId

    setData({...data, [`passenger${i}`]: {}})
    setComponent([...components, {id: i, value: <PassengerItem id={i} key={i} data={data} setData={setData}/>}])
  }

  const addToPay = () => {
    navigate('/payment', { state: {...state, users: data}});
  }

  useEffect(() => {
    console.log(passengersData)
    let qty = +passengersData.arrival.adultQty + +passengersData.arrival.childrenQty
    let i = 1
    let arr = []

    while (i <= qty) {
      arr.push({id: i, value: <PassengerItem id={i} key={i} data={data} setData={setData}/>})
      i++
    }

    setComponent([...arr])
    setComponentId(++qty)
  }, [])

  return(
    <div className='passengersList'>
      {/*<UIButton  label={'Test'} onClick={() => console.log(data)}/>*/}
      {components.map(component => component.value)}
      <div className='passengersList__add' onClick={() => addPassenger()}>
        <div className='font-30'>Добавить пассажира</div>
        <div className='plus'>+</div>
      </div>

      <div className='passengersList-btn'>
        <UIButton label={'Далее'} color={'primary'} variant={'contained'} onClick={addToPay}/>
      </div>
    </div>
  )
}