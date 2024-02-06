import finish1 from "../../assets/icons/finish1.svg";
import React from "react";
import '../../assets/style/Finish.scss'

export default function FinishPassenger() {
  return (
    <div className='finishData__itemPassenger'>
      <div className='finishData__itemPassenger-left'>
        <img src={finish1} alt="finish1"/>
        <div>Взрослый</div>
      </div>
      <div className='finishData__itemPassenger-right'>
        <div className='font-18'>Мартынюк Ирина Эдуардовна</div>
        <div className='font-18 gray'>Пол женский</div>
        <div className='font-18 gray'>Дата рождения 17.02.1985</div>
        <div className='font-18 gray'>Паспорт РФ 4204 380694</div>
      </div>
    </div>
  )
}