import finish1 from "../../assets/icons/finish1.svg";
import React from "react";
import '../../assets/style/Finish.scss'
import {formatDate} from "../../common/utils";

export default function FinishPassenger({ data }) {
  return (
    <div className='finishData__itemPassenger'>
      <div className='finishData__itemPassenger-left'>
        <img src={finish1} alt="finish1"/>
        <div>{data.ticketType === 2 ? 'Детский' : 'Взрослый' }</div>
      </div>
      <div className='finishData__itemPassenger-right'>
        <div className='font-18'>{data.surname} {data.firstName} {data.lastName}</div>
        <div className='font-18 gray'>Пол {data.gender === 1 ? 'мужской' : 'женский'}</div>
        <div className='font-18 gray'>Дата рождения {formatDate(data.birthday, true)}</div>
        <div className='font-18 gray'>{data.docType === 1 ? `Паспорт РФ ${data.numPassport}` : `Свидетельство ${data.numPassport}`}</div>
      </div>
    </div>
  )
}