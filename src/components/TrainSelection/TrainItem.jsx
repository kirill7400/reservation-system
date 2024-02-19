import React from 'react';
import '../../assets/style/TrainItem.scss'
import list1 from "../../assets/icons/list1.svg";
import list2 from "../../assets/icons/list2.svg";
import list3 from "../../assets/icons/list3.svg";
import filter5 from "../../assets/icons/filter5.svg";
import filter4 from "../../assets/icons/filter4.svg";
import UIButton from "../UIComponents/UIButton";
import {capitalized, formatTime, secInHour} from "../../common/utils";
import {useLocation, useNavigate} from "react-router-dom";

export default function TrainItem({ item, leftFilters, viewBtn = true }) {
  const navigate = useNavigate();
  const {state} = useLocation();

  const goToSeat = () => {
    navigate('/seat-selection', { state: {...state, train: item, leftFilters}});
  }

  return(
    <div className='train-list__item'>
      <div className='train-list__left'>
        <img className='train-list__left-logo' src={list1} alt="list1"/>
        <div className='train-list__left-text font-24'>116С</div>
        <div className='train-list__left-city'>
          { item.arrival && <div className='font-16'>{ capitalized(item.arrival.from.city.name) } &#8594;</div> }
          {item.arrival && <div className='font-16'>{capitalized(item.arrival.to.city.name)} &#8594;</div>}
          {item.departure && <div className='font-16'>{capitalized(item.departure.to.city.name)}</div>}
        </div>
      </div>

      <div className='train-list__center'>
        {item.arrival &&
        <div className='train-list__center-item'>
          <div className='train-list__center-left'>
            <div className='font-24'>{ formatTime(item.arrival.from.datetime) }</div>
            <div className='font-18'>{ capitalized(item.arrival.from.city.name) }</div>
            <div className='font-16'>{ item.arrival.from.railway_station_name }</div>
          </div>
          <div className='train-list__center-center'>
            <div className='font-18'>{ secInHour(item.arrival.duration) }</div>
            <img src={list2} alt="list2"/>
          </div>
          <div className='train-list__center-right'>
            <div className='font-24'>{ formatTime(item.arrival.to.datetime) }</div>
            <div className='font-18'>{ capitalized(item.arrival.to.city.name) }</div>
            <div className='font-16'>{ item.arrival.to.railway_station_name }</div>
          </div>
        </div>
        }
        {item.departure &&
          <div className='train-list__center-item'>
            <div className='train-list__center-left'>
              <div className='font-24'>{ formatTime(item.departure.from.datetime) }</div>
              <div className='font-18'>{ capitalized(item.departure.from.city.name) }</div>
              <div className='font-16'>{ item.departure.from.railway_station_name }</div>
            </div>
            <div className='train-list__center-center'>
              <div className='font-18'>{ secInHour(item.departure.duration) }</div>
              <img src={list3} alt="list3"/>
            </div>
            <div className='train-list__center-right'>
              <div className='font-24'>{ formatTime(item.departure.to.datetime) }</div>
              <div className='font-18'>{ capitalized(item.departure.to.city.name) }</div>
              <div className='font-16'>{ item.departure.to.railway_station_name }</div>
            </div>
          </div>
        }

      </div>

      <div className='train-list__right'>
        {
          item.available_seats_info.fourth &&
          <div className='train-list__right-detailItem'>
            <div className='font-16 left'>Сидячий</div>
            <div className='font-16 center'>{ item.available_seats_info.fourth }</div>
            <div className='right'>
              <div className='font-16'>от</div>
              <div className='font-24'>{ item.min_price }</div>
              <img src={filter5} alt="filter5"/></div>
          </div>
        }

        {
          item.available_seats_info.third &&
          <div className='train-list__right-detailItem'>
            <div className='font-16 left'>Плацкарт</div>
            <div className='font-16 center'>{ item.available_seats_info.third }</div>
            <div className='right'>
              <div className='font-16'>от</div>
              <div className='font-24'>{ item.min_price }</div>
              <img src={filter5} alt="filter5"/></div>
          </div>
        }

        {
          item.available_seats_info.second &&
          <div className='train-list__right-detailItem'>
            <div className='font-16 left'>Купе</div>
            <div className='font-16 center'>{ item.available_seats_info.second }</div>
            <div className='right'>
              <div className='font-16'>от</div>
              <div className='font-24'>{ item.min_price }</div>
              <img src={filter5} alt="filter5"/></div>
          </div>
        }

        {
          item.available_seats_info.first &&
          <div className='train-list__right-detailItem'>
            <div className='font-16 left'>Люкс</div>
            <div className='font-16 center'>{ item.available_seats_info.first }</div>
            <div className='right'>
              <div className='font-16'>от</div>
              <div className='font-24'>{ item.min_price }</div>
              <img src={filter5} alt="filter5"/></div>
          </div>
        }

        <div className='train-list__right-icons'>
          <img src={filter4} alt="filter4"/>
        </div>
        {viewBtn && <UIButton label={'Выбрать места'} color={'primary'} variant={'contained'} onClick={ goToSeat }/>}
      </div>
    </div>
  )
}