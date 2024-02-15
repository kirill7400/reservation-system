import React, {useEffect, useState} from 'react';
import '../../assets/style/TrainFilter.scss'
import UIDatePicker from "../UIComponents/UIDatePicker";
import option1 from "../../assets/icons/option1.svg";
import option2 from "../../assets/icons/option2.svg";
import option3 from "../../assets/icons/option3.svg";
import option4 from "../../assets/icons/option4.svg";
import option5 from "../../assets/icons/option5.svg";
import option6 from "../../assets/icons/option6.svg";
import filter1 from '../../assets/icons/filter1.svg'
import filter2 from '../../assets/icons/filter2.svg'
import filter3 from '../../assets/icons/filter3.svg'
import filter6 from '../../assets/icons/filter6.svg'
import UISlider from "../UIComponents/UISlider";
import TrainFilterSwitch from "./TrainFilterSwitch";
import {formatDate} from "../../common/utils";

export default function TrainFilter({ setFilters }) {
  const initFilterSwitch = {
    second: false,
    third: false,
    fourth: false,
    first: false,
    wifi: false,
    express: false,
  }

  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [price, setPrice] = useState([300, 3500]);
  const [timeFilter, setTimeFilter] = useState([3, 10]);
  const [plusTo, setPlusTo] = useState(false);
  const [plusFrom, setPlusFrom] = useState(false);
  const [filterSwitch, setFilterSwitch] = useState(initFilterSwitch);

  const switchVariants = [
    { value: 'second', label: 'Купе', img: option1 },
    { value: 'third', label: 'Плацкарт', img: option2 },
    { value: 'fourth', label: 'Сидячий', img: option3 },
    { value: 'first', label: 'Люкс', img: option4 },
    { value: 'wifi', label: 'Wi-Fi', img: option5 },
    { value: 'express', label: 'Экспресс', img: option6 }
  ]

  useEffect(() => {
    let filters = {
      ...filterSwitch,
      dateFrom: formatDate(dateFrom),
      dateTo: formatDate(dateTo),
      price
    }

    setFilters(filters)
  }, [filterSwitch, dateFrom, dateTo, price]);

  const handlerSwitch = (v, param) => {
    setFilterSwitch({...filterSwitch, [param]: v})
  }

  return(
    <div className='train-filter'>
      <div className='train-filter__date'>
        <div className='train-filter__date-item'>
          <div className='font-30'>Дата поездки</div>
          <UIDatePicker value={dateFrom} setValue={setDateFrom}/>
        </div>
        <div className='train-filter__date-item'>
          <div className='font-30'>Дата возвращения</div>
          <UIDatePicker value={dateTo} setValue={setDateTo}/>
        </div>
      </div>

      <div className='train-filter__divider'></div>

      <div className='train-filter__options'>
        { switchVariants.map((item, i)=>
          <TrainFilterSwitch
          key={ i }
          i={ i }
          value={filterSwitch[item.value]}
          control={ item }
          setValue={(v) => handlerSwitch(v,item.value)}
          />) }
      </div>

      <div className='train-filter__divider'></div>

      <div className='train-filter__price'>
        <div className='font-30 train-filter__price-text'>Стоимость</div>
        <div className='train-filter__price-label'>
          <div className='font-18'>от</div>
          <div className='font-18'>до</div>
        </div>
        <UISlider value={price} setValue={setPrice} min={ 200 } max={ 5000 }/>
      </div>

      <div className='train-filter__divider'></div>

      <div className={plusTo ? 'train-filter__to train-filter__plusActive' : 'train-filter__to'}>
        <div className='train-filter__toTitle'>
          <img src={filter1} alt="filter1"/>
          <div className='font-30'>Туда</div>
          {plusTo ? <img onClick={ () => setPlusTo(false) } className='train-filter__to-plus' src={filter6} alt="filter6"/> :
            <img onClick={ () => setPlusTo(true) } className='train-filter__to-plus' src={filter2} alt="filter2"/>}
        </div>

        {plusTo &&
          <div className='train-filter__toFilters'>
            <div className='train-filter__toDeparture'>
              <div className='font-24'>Время отбытия</div>
              <UISlider value={timeFilter} setValue={setTimeFilter} min={ 0 } max={ 24 } labelFormat={'time'}/>
            </div>
            <div className='train-filter__toArrival'>
              <div className='font-24'>Время прибытия</div>
              <UISlider value={timeFilter} setValue={setTimeFilter} min={ 0 } max={ 24 } labelFormat={'time'}/>
            </div>

          </div>
        }
      </div>

      <div className='train-filter__divider'></div>

      <div className={plusFrom ? 'train-filter__from train-filter__plusActive' : 'train-filter__from'}>
        <div className='train-filter__fromTitle'>
          <img src={filter3} alt="filter1"/>
          <div className='font-30'>Обратно</div>
          {plusFrom ? <img onClick={ () => setPlusFrom(false) } className='train-filter__from-plus' src={filter6} alt="filter6"/> :
            <img onClick={ () => setPlusFrom(true) } className='train-filter__from-plus' src={filter2} alt="filter2"/>}
        </div>

        {plusFrom &&
          <div className='train-filter__toFilters'>
            <div className='train-filter__toDeparture'>
              <div className='font-24'>Время отбытия</div>
              <UISlider value={timeFilter} setValue={setTimeFilter} min={ 0 } max={ 24 } labelFormat={'time'}/>
            </div>
            <div className='train-filter__toArrival'>
              <div className='font-24'>Время прибытия</div>
              <UISlider value={timeFilter} setValue={setTimeFilter} min={ 0 } max={ 24 } labelFormat={'time'}/>
            </div>

          </div>
        }
      </div>
    </div>
  )
}