import React from 'react';
import '../../assets/style/Finish.scss'
import TrainItem from "../TrainSelection/TrainItem";
import FinishPassenger from "./FinishPassenger";
import UIButton from "../UIComponents/UIButton";

export default function FinishData() {
  return(
    <div className='finishData'>
      <div className='finishData__item'>
        <div className='finishData__itemTitle'>
          <div className='font-30'>Поезд</div>
        </div>
        <TrainItem/>
      </div>

      <div className='finishData__item'>
        <div className='finishData__itemTitle'>
          <div className='font-30'>Пассажиры</div>
        </div>
        <div className='finishData__itemPassengers'>
          <div className='finishData__itemPassengers-left'>
            <FinishPassenger/>
            <FinishPassenger/>
            <FinishPassenger/>
          </div>
          <div className='finishData__itemPassengers-right'>
            <div className='finishData__itemPassengers-cost'>
              <div className='font-30'>Всего</div>
              <div className='font-30'>7 760 &#8381;</div>
            </div>
            <UIButton label={'Изменить'} color={'white'} variant={'outlined'}/>
          </div>
        </div>
      </div>

      <div className='finishData__item'>
        <div className='finishData__itemTitle'>
          <div className='font-30'>Способ оплаты</div>
        </div>
        <div className='finishData__item-typePay'>
          <div className='finishData__item-typePayLeft'>
            Наличными
          </div>
          <div className='finishData__item-typePayRight'>
            <UIButton label={'Изменить'} color={'white'} variant={'outlined'}/>
          </div>
        </div>
      </div>

    </div>
  )
}