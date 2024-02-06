import React, {useState} from 'react';
import '../../assets/style/PassengersList.scss'
import PassengerItem from "./PassengerItem";
import UIButton from "../UIComponents/UIButton";

export default function PassengersList() {
  const [componentId, setComponentId] = useState(2)
  const [data, setData] = useState({ passenger1: {} })
  const [components, setComponent] = useState([{id: 1, value: <PassengerItem id={1} key={1} data={data} setData={setData}/>}])

  const addPassenger = () => {
    setComponentId(componentId + 1)
    let i = componentId

    setData({...data, [`passenger${i}`]: {}})
    setComponent([...components, {id: i, value: <PassengerItem id={i} key={i} data={data} setData={setData}/>}])
  }

  return(
    <div className='passengersList'>
      {/*<UIButton  label={'Test'} onClick={() => console.log(data)}/>*/}
      {components.map(component => component.value)}
      <div className='passengersList__add' onClick={() => addPassenger()}>
        <div className='font-30'>Добавить пассажира</div>
        <div className='plus'>+</div>
      </div>

      <div className='passengersList-btn'>
        <UIButton label={'Далее'} color={'primary'} variant={'contained'}/>
      </div>
    </div>
  )
}