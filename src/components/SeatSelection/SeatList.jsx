import React, {useEffect, useState} from 'react';
import '../../assets/style/SeatList.scss'
import filter1 from "../../assets/icons/filter1.svg";
import filter7 from "../../assets/icons/filter7.svg";
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
import {useLocation, useNavigate} from "react-router-dom";
import {capitalized, formatTime, secInHour} from "../../common/utils";
import {seatsInfo} from "../../common/api";
import UIModal from "../UIComponents/UIModal";
import UISelect from "../UIComponents/UISelect";

export default function SeatList({ train, trainType, setData }) {
  const [adultQty, setAdultQty] = useState('0');
  const [childrenQty, setChildrenQty] = useState('0');
  const [withChildQty, setWithChildQty] = useState('0');

  const [btnColor, setBtnColor] = useState([0, 0, 0, 0]);
  const [service, setService] = useState([false, false, false, false]);

  const [carriageList, setCarriageList] = useState([]);
  const [carriageData, setCarriageData] = useState([]);
  const [carriage, setCarriage] = useState('');
  const [selectedCarriage, setSelectedCarriage] = useState({});
  const [selectSeats, setSelectSeats] = useState([]);
  const [seatsList, setsSeatsList] = useState([]);



  const carriageTypeClick = (v) => {
    let arr = [0, 0, 0, 0]
    arr[v] = 1
    setBtnColor(arr)
  }

  const carriageNumClick = (v) => {
    setCarriage(v)
    selectCarriage(v, carriageData)
  }

  const carriageService = (v) => {
    let arr = [...service]
    arr[v] = !arr[v]
    setService(arr);
  }

  const navigate = useNavigate();
  const {state} = useLocation();

  const goToSelection = () => {
    navigate('/train-selection', { state: {...state}});
  }

  const initModalConfig = {
    show: false,
    message: ''
  }
  const [modalConfig, setModalConfig] = useState(initModalConfig)

  useEffect(() => {
    if (train['_id']) {
      seatsInfo(train['_id'])
        .then((res) => {
          if (!res.length) {
            setModalConfig({ show: true, message: 'По вашим фильтрам не найдено вагонов!' })
            return
          }

          let list = []
          res.forEach(i => list.push(i.coach.name))

          setCarriageData([...res])
          setCarriageList([...list])
          setCarriage(list[0])

          selectCarriage(list[0], res)
        })
    }
  }, [])

  const selectCarriage = (carriage, data) => {
    let carriageFind = data.find(i => i.coach.name === carriage)
    setSelectedCarriage({...carriageFind})
    setTypeCarriage(carriageFind.coach.class_type)
    setSeatsList(carriageFind.seats)
    setServiceBtn(carriageFind.coach)
  }

  const setTypeCarriage = (classType) => {
    switch (classType) {
      case 'first':
        setBtnColor([0, 0, 0, 1]);
        break;
      case 'second':
        setBtnColor([0, 0, 1, 0]);
        break;
      case 'third':
        setBtnColor([0, 1, 0, 0]);
        break;
      case 'fourth':
        setBtnColor([1, 0, 0, 0]);
        break;
    }
  }

  const setSeatsList = (list) => {
    let seats = list.map(i => { return {value: i.index.toString(), label: i.index.toString()} })
    setsSeatsList([...seats])
  }

  const setServiceBtn = (data) => {
    if (data?.is_linens_included)
      setService([false, false, true, false])
    else setService([false, false, false, false])
  }

  useEffect(() => {
    setData({
      selectSeats,
      selectedCarriage,
      adultQty,
      childrenQty,
      withChildQty
    })
  }, [selectSeats, selectedCarriage, adultQty, childrenQty, withChildQty]);

  return(
    <div className='seat-list'>
      <div className='seat-list__item'>
        {trainType === 'arrival' ?
          <div className='seat-list__item-changeTrain left'>
            <img src={filter1} alt="filter1"/>
            <UIButton label={'Выбрать другой поезд'} color={'white'} variant={'outlined'} onClick={goToSelection}/>
          </div> :
          <div className='seat-list__item-changeTrain right'>
            <img src={filter7} alt="filter1"/>
            <UIButton label={'Выбрать другой поезд'} color={'white'} variant={'outlined'} onClick={goToSelection}/>
          </div>
        }

        <UIModal open={modalConfig} setOpen={setModalConfig}/>

        <div className='seat-list__item-timeInfo'>
          <div className='seat-list__item-trainInfo'>
            <img className='seat-list__item-logo' src={seat1} alt="list1"/>
            <div className='seat-list__item-city'>
              <div className='font-24'>116С</div>
              <div className='seat-list__item-text'>{capitalized(train.from.city.name)} &#8594;</div>
              <div className='font-16'>{capitalized(train.to.city.name)}</div>
              {/*<div className='font-16'>Санкт-Петербург</div>*/}
            </div>
          </div>
          <div className='seat-list__item-timeFrom'>
            <div className='font-24'>{formatTime(train.to.datetime)}</div>
            <div className='font-18'>{capitalized(train.to.city.name)}</div>
            <div className='font-16'>{train.to.railway_station_name}</div>
          </div>
          <img src={list2} alt="list2"/>
          <div className='seat-list__item-timeTo'>
            <div className='font-24'>{formatTime(train.from.datetime)}</div>
            <div className='font-18'>{capitalized(train.from.city.name)}</div>
            <div className='font-16'>{train.from.railway_station_name}</div>
          </div>
          <div className='seat-list__item-onWay'>
            <img src={seat2} alt="seat2"/>
            <div className='seat-list__item-onWayTime'>{secInHour(train.duration, true)}</div>
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
              <UIInput value={ childrenQty } setValue={ setChildrenQty } adornment={'Детских —'} placeholder={''}/>
              <div className='seat-list__item-ticketsText font-16'>Можно добавить еще 3 детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</div>
            </div>
            <div className='seat-list__item-ticketsInput'>
              <UIInput value={ withChildQty } setValue={ setWithChildQty } adornment={'Детских «без места» —'} placeholder={''}/>
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
              { carriageList.map((item, i) =>
                <div
                  key={i}
                  onClick={() => carriageNumClick(item)}
                  className={carriage === item ? 'seat-list__carriageNum-item active' : 'seat-list__carriageNum-item'}
                >{item}</div>)}
            </div>
            <div className='font-16'>Нумерация вагонов начинается с головы поезда</div>
          </div>

          <div className='seat-list__carriageInfo'>
            <div className='seat-list__carriageInfo-title'>
              <div className='seat-list__carriageInfo-titleNum'>{carriage}</div>
              <div className='seat-list__carriageInfo-titleText font-24'>вагон</div>
            </div>
            <div className='seat-list__carriageInfo-data'>
              <div className='seat-list__carriageInfo-dataItem'>
                <div className='font-18'><span>Места</span> {selectedCarriage?.coach?.available_seats}</div>
                <div className='font-24'>Верхние</div>
                <div className='font-24'>Нижние</div>
                <div className='font-24'>Боковые</div>
              </div>
              <div className='seat-list__carriageInfo-dataItem'>
                <div className='font-18'><span>Стоимость</span></div>
                <div className='font-24'>{selectedCarriage?.coach?.top_price} &#8381;</div>
                <div className='font-24'>{selectedCarriage?.coach?.bottom_price} &#8381;</div>
                <div className='font-24'>{selectedCarriage?.coach?.side_price} &#8381;</div>
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

          <div className='seat-list__selectSeat'>
            <UISelect label={'Выберите места'} variants={ seatsList } value={ selectSeats } setValue={ setSelectSeats } multiple={true}/>
          </div>
        </div>
      </div>
    </div>
  )
}