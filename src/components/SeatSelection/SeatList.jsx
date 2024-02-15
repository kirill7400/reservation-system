import React, {useState} from 'react';
import '../../assets/style/SeatList.scss'
import filter1 from "../../assets/icons/filter1.svg";
import UIButton from "../UIComponents/UIButton";
import seat1 from "../../assets/icons/seat1.svg";
import seat2 from "../../assets/icons/seat2.svg";
import list2 from "../../assets/icons/list2.svg";
import UIInput from "../UIComponents/UIInput";
import seat3 from "../../assets/icons/seat3.svg";
import seat4 from "../../assets/icons/seat4.svg";
import seat5 from "../../assets/icons/seat5.svg";
import seat6 from "../../assets/icons/seat6.svg";
import seat7 from "../../assets/icons/seat7.svg";
import seat8 from "../../assets/icons/seat8.svg";
import seat9 from "../../assets/icons/seat9.svg";
import seat10 from "../../assets/icons/seat10.svg";
import {HandySvg} from 'handy-svg';

export default function SeatList() {
  const [adultQty, setAdultQty] = useState('0');
  const [btnColor, setBtnColor] = useState([1, 0, 0, 0]);
  const [carriageNum, setCarriageNum] = useState('07');
  const [service, setService] = useState([false, false, false, false]);



  const carriageTypeClick = (v) => {
    let arr = [0, 0, 0, 0]
    arr[v] = 1
    setBtnColor(arr)
  }

  const carriageNumClick = (v) => {
    setCarriageNum(v)
  }

  const carriageService = (v) => {
    let arr = [...service]
    arr[v] = !arr[v]
    setService(arr);
  }

  return(
    <div className='seat-list'>
      <div className='seat-list__title font-30'>Выбор мест</div>
      <div className='seat-list__item'>
        <div className='seat-list__item-changeTrain'>
          <img src={filter1} alt="filter1"/>
          <UIButton label={'Выбрать другой поезд'} color={'white'} variant={'outlined'}/>
        </div>

        <div className='seat-list__item-timeInfo'>
          <div className='seat-list__item-trainInfo'>
            <img className='seat-list__item-logo' src={seat1} alt="list1"/>
            <div className='seat-list__item-city'>
              <div className='font-24'>116С</div>
              <div className='seat-list__item-text'>Адлер &#8594;</div>
              <div className='font-16'>Москва &#8594;</div>
              <div className='font-16'>Санкт-Петербург</div>
            </div>
          </div>
          <div className='seat-list__item-timeFrom'>
            <div className='font-24'>00:10</div>
            <div className='font-18'>Москва</div>
            <div className='font-16'>Курский вокзал</div>
          </div>
          <img src={list2} alt="list2"/>
          <div className='seat-list__item-timeTo'>
            <div className='font-24'>00:10</div>
            <div className='font-18'>Москва</div>
            <div className='font-16'>Курский вокзал</div>
          </div>
          <div className='seat-list__item-onWay'>
            <img src={seat2} alt="seat2"/>
            <div className='seat-list__item-onWayTime'>9 часов <br/> 42 минуты</div>
          </div>
        </div>

        <div className='seat-list__item-ticketsQty'>
          <div className='seat-list__item-ticketsTitle font-30'>Количество билетов</div>
          <div className='seat-list__item-ticketsInputs'>
            <div className='seat-list__item-ticketsInput'>
              <UIInput value={ adultQty } setValue={ setAdultQty } adornment={'Взрослых — '} placeholder={''}/>
              <div className='seat-list__item-ticketsText font-16'>Можно добавить еще 3 пассажиров</div>
            </div>
            <div className='seat-list__item-ticketsInput'>
              <UIInput value={ adultQty } setValue={ setAdultQty } adornment={'Детских —'} placeholder={''}/>
              <div className='seat-list__item-ticketsText font-16'>Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</div>
            </div>
            <div className='seat-list__item-ticketsInput'>
              <UIInput value={ adultQty } setValue={ setAdultQty } adornment={'Детских «без места» —'} placeholder={''}/>
            </div>
          </div>
        </div>

        <div className='seat-list__item-hr'/>

        <div className='seat-list__item-carriage'>
          <div className='seat-list__carriageTitle font-30'>Тип вагона</div>

          <div className='seat-list__carriageBtn'>
            <div onClick={() => carriageTypeClick(0)} className='seat-list__carriageBtnItem'>
              <HandySvg src={seat3} className={!!btnColor[0] ? 'icon-active' : 'icon1'} width="30.435" height="50"/>
              <div>Сидячий</div>
            </div>
            <div onClick={() => carriageTypeClick(1)} className='seat-list__carriageBtnItem'>
              <HandySvg src={seat4} className={!!btnColor[1] ? 'icon-active' : 'icon1'} width="50" height="50"/>
              <div>Плацкарт</div>
            </div>
            <div onClick={() => carriageTypeClick(2)} className='seat-list__carriageBtnItem'>
              <HandySvg src={seat5} className={!!btnColor[2] ? 'icon-active' : 'icon1'} width="50" height="50"/>
              <div>Купе</div>
            </div>
            <div onClick={() => carriageTypeClick(3)} className='seat-list__carriageBtnItem'>
              <HandySvg src={seat6} className={!!btnColor[3] ? 'icon-active' : 'icon1'} width="56.452" height="50"/>
              <div>Люкс</div>
            </div>
          </div>

          <div className='seat-list__carriageNum'>
            <div className='seat-list__carriageNum-list'>
              <div>Вагоны</div>
              <div
                onClick={() => carriageNumClick('07')}
                className={carriageNum === '07' ? 'seat-list__carriageNum-item active' : 'seat-list__carriageNum-item'}
              >07</div>
              <div
                onClick={() => carriageNumClick('09')}
                className={carriageNum === '09' ? 'seat-list__carriageNum-item active' : 'seat-list__carriageNum-item'}
              >09</div>
            </div>
            <div className='font-16'>Нумерация вагонов начинается с головы поезда</div>
          </div>

          <div className='seat-list__carriageInfo'>
            <div className='seat-list__carriageInfo-title'>
              <div className='seat-list__carriageInfo-titleNum'>{carriageNum}</div>
              <div className='seat-list__carriageInfo-titleText font-24'>вагон</div>
            </div>
            <div className='seat-list__carriageInfo-data'>
              <div className='seat-list__carriageInfo-dataItem'>
                <div className='font-18'><span>Места</span> 11</div>
                <div className='font-24'>Верхние  3</div>
                <div className='font-24'>Нижние  8</div>
              </div>
              <div className='seat-list__carriageInfo-dataItem'>
                <div className='font-18'><span>Стоимость</span></div>
                <div className='font-24'>2 920 &#8381;</div>
                <div className='font-24'>3 530 &#8381;</div>
              </div>
              <div className='seat-list__carriageInfo-dataItem'>
                <div className='font-18'><span>Обслуживание ФПК</span></div>
                <div className='seat-list__carriageInfo-dataIcons'>
                  <div onClick={() => carriageService(0)} className={!!service[0] ? 'seat-list__carriageInfo-dataIcon back-active' : 'seat-list__carriageInfo-dataIcon'}>
                    <HandySvg src={seat7} className={!!service[0] ? 'icon-active' : ''} width="19" height="19"/>
                  </div>
                  <div onClick={() => carriageService(1)} className={!!service[1] ? 'seat-list__carriageInfo-dataIcon back-active' : 'seat-list__carriageInfo-dataIcon'}>
                    <HandySvg src={seat8} className={!!service[1] ? 'icon-active' : ''} width="19" height="19"/>
                  </div>
                  <div onClick={() => carriageService(2)} className={!!service[2] ? 'seat-list__carriageInfo-dataIcon back-active' : 'seat-list__carriageInfo-dataIcon'}>
                    <HandySvg src={seat9} className={!!service[2] ? 'icon-active' : ''} width="19" height="19"/>
                  </div>
                  <div onClick={() => carriageService(3)} className={!!service[3] ? 'seat-list__carriageInfo-dataIcon back-active' : 'seat-list__carriageInfo-dataIcon'}>
                    <HandySvg src={seat10} className={!!service[3] ? 'icon-active' : ''} width="19" height="19"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}