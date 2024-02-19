import React, {useState} from 'react';
import '../assets/style/TripDetail.scss'
import filter1 from "../assets/icons/filter1.svg";
import filter6 from "../assets/icons/filter6.svg";
import filter2 from "../assets/icons/filter2.svg";
import list2 from "../assets/icons/list2.svg";
import list3 from "../assets/icons/list3.svg";
import filter3 from "../assets/icons/filter3.svg";
import passengers1 from "../assets/icons/passengers1.svg";
import {capitalized, formatDate, formatPrettyDate, formatTime, secInHour} from "../common/utils";

export default function TripDetail({ tripData }) {
  const [plusTo, setPlusTo] = useState(true);
  const [plusFrom, setPlusFrom] = useState(true);
  const [plusPassengers, setPlusPassengers] = useState(true);

  return(
    <div className='tripDetail'>
      <div className='tripDetail__title font-30'>Детали поездки</div>

      <div className='tripDetail__divider'/>

      <div className='tripDetail__to'>
        <div className='tripDetail__toTitle'>
          <img src={filter1} alt="filter1"/>
          <div className='font-30'>Туда</div>
          <div className='font-16'>{ formatDate(tripData.dateStart, true) }</div>
          {plusTo ?
            <img onClick={() => setPlusTo(false)} className='tripDetail__to-plus' src={filter6} alt="filter6"/> :
            <img onClick={() => setPlusTo(true)} className='tripDetail__to-plus' src={filter2} alt="filter2"/>}
        </div>

        {plusTo &&
          <div className='tripDetail__toInfo'>
            <div className='tripDetail__toInfo-item'>
              <div className='font-18'>№ Поезда</div>
              <div className='font-24'>116С</div>
            </div>
            <div className='tripDetail__toInfo-item'>
              <div className='font-18'>Название</div>
              <div className='font-16'>{ capitalized(tripData.arrival.to.city.name) } <br/> { capitalized(tripData.arrival.from.city.name) }</div>
            </div>
            <div className='tripDetail__toInfo-itemTime'>
              <div className='font-24'>{formatTime(tripData.arrival.from.datetime)} <br/> {/*<span className='font-18'>30.08.2018</span>*/}</div>
              <div>
                <div className='font-18'>{ secInHour(tripData.arrival.duration) }</div>
                <img src={list2} alt="list2"/>
              </div>
              <div className='font-24'>{formatTime(tripData.arrival.to.datetime)} <br/> {/*<span className='font-18'>31.08.2018</span>*/}</div>
            </div>
            <div className='tripDetail__toInfo-item'>
              <div className='tripDetail__toInfo-cityInfoLeft'>
                <div className='font-18 city'>{ capitalized(tripData.arrival.to.city.name) }</div>
                <div className='font-18'>{ tripData.arrival.to.railway_station_name }</div>
              </div>
              <div className='tripDetail__toInfo-cityInfoRight'>
                <div className='font-18 city'>{ capitalized(tripData.arrival.from.city.name) }</div>
                <div className='font-18'>{ tripData.arrival.from.railway_station_name }</div>
              </div>
            </div>
          </div>
        }
      </div>

      <div className='tripDetail__divider'/>

      {tripData.departure &&
        <div className='tripDetail__to'>
          <div className='tripDetail__toTitle'>
            <img src={filter3} alt="filter1"/>
            <div className='font-30'>Обратно</div>
            <div className='font-16'>{formatDate(tripData.dateEnd, true)}</div>
            {plusFrom ?
              <img onClick={() => setPlusFrom(false)} className='tripDetail__to-plus' src={filter6} alt="filter6"/> :
              <img onClick={() => setPlusFrom(true)} className='tripDetail__to-plus' src={filter2} alt="filter2"/>}
          </div>

          {plusFrom &&
            <div className='tripDetail__toInfo'>
              <div className='tripDetail__toInfo-item'>
                <div className='font-18'>№ Поезда</div>
                <div className='font-24'>116С</div>
              </div>
              <div className='tripDetail__toInfo-item'>
                <div className='font-18'>Название</div>
                <div className='font-16'>{ capitalized(tripData.departure.to.city.name) } <br/> { capitalized(tripData.departure.from.city.name) }</div>
              </div>
              <div className='tripDetail__toInfo-itemTime'>
                <div className='font-24'>{formatTime(tripData.departure.from.datetime)} <br/> {/*<span className='font-18'>30.08.2018</span>*/}</div>
                <div>
                  <div className='font-18'>{ secInHour(tripData.departure.duration) }</div>
                  <img src={list3} alt="list2"/>
                </div>
                <div className='font-24'>{formatTime(tripData.departure.to.datetime)} <br/> {/*<span className='font-18'>31.08.2018</span>*/}</div>
              </div>
              <div className='tripDetail__toInfo-item'>
                <div className='tripDetail__toInfo-cityInfoLeft'>
                  <div className='font-18 city'>{ capitalized(tripData.departure.to.city.name) }</div>
                  <div className='font-18'>{ tripData.departure.to.railway_station_name }</div>
                </div>
                <div className='tripDetail__toInfo-cityInfoRight'>
                  <div className='font-18 city'>{ capitalized(tripData.departure.from.city.name) }</div>
                  <div className='font-18'>{ tripData.departure.from.railway_station_name }</div>
                </div>
              </div>
            </div>
          }
        </div>}

      <div className='tripDetail__divider'/>

      <div className='tripDetail__to'>
        <div className='tripDetail__toTitle'>
          <img src={passengers1} alt="passengers1"/>
          <div className='font-30'>Пассажиры</div>
          {plusPassengers ?
            <img onClick={() => setPlusPassengers(false)} className='tripDetail__to-plus' src={filter6}
                 alt="filter6"/> :
            <img onClick={() => setPlusPassengers(true)} className='tripDetail__to-plus' src={filter2} alt="filter2"/>}
        </div>

        {plusPassengers &&
          <div className='tripDetail__toInfo'>
            <div className='tripDetail__toInfo-itemPassengers'>
              <div className='font-18'>{tripData.passInfo.arrival.adultQty} Взрослых</div>
              <div className='font-24'>{tripData.passInfo.arrival.adultQty * tripData.passInfo.arrival.selectedCarriage.coach.top_price} <span className='ruble'>&#8381;</span></div>
            </div>
            <div className='tripDetail__toInfo-itemPassengers'>
              <div className='font-18'>{tripData.passInfo.arrival.childrenQty} Ребенок</div>
              <div className='font-24'>{tripData.passInfo.arrival.childrenQty * tripData.passInfo.arrival.selectedCarriage.coach.top_price} <span className='ruble'>&#8381;</span></div>
            </div>
          </div>
        }
      </div>

      <div className='tripDetail__divider'/>

      <div className='tripDetail__total'>
        <div className='font-30'>Итог</div>
        <div className='font-30 total'>{(+tripData.passInfo.arrival.adultQty + +tripData.passInfo.arrival.childrenQty) * tripData.passInfo.arrival.selectedCarriage.coach.top_price} <span className='ruble'>&#8381;</span></div>
      </div>
    </div>
  )
}