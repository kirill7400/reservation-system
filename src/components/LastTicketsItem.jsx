import React from 'react';
import '../assets/style/LastTickets.scss'
import filter4 from "../assets/icons/filter4.svg";
import filter5 from "../assets/icons/filter5.svg";
import { capitalized } from '../common/utils'

export default function LastTicketsItem({ data }) {


  return(
    <div className='last-tickets__item'>
      <div className='last-tickets__city'>
        <div className='last-tickets__city-left'>
          <div className='font-20'>{ capitalized(data.departure.from.city.name) }</div>
          <div className='font-16'>{ data.departure.from.railway_station_name }</div>
        </div>
        <div className='last-tickets__city-right'>
          <div className='font-20'>{ capitalized(data.departure.to.city.name) }</div>
          <div className='font-16'>{ data.departure.to.railway_station_name }</div>
        </div>
      </div>

      <div className='last-tickets__bottom'>
        <img src={filter4} alt="filter4"/>
        <div className='last-tickets__num'>
          <div className='font-16'>от</div>
          <div className='font-36 last-tickets__num-price'>{ data.min_price }</div>
          <img src={filter5} alt="filter5"/>
        </div>
      </div>
    </div>
  )
}