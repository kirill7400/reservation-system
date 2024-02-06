import React from 'react';
import '../assets/style/LastTickets.scss'
import filter4 from '../assets/icons/filter4.svg'
import filter5 from '../assets/icons/filter5.svg'

export default function LastTickets() {
  return(
    <div className='last-tickets'>
      <div className='last-tickets__title font-30'>Последние билеты</div>

      <div className='last-tickets__item'>
        <div className='last-tickets__city'>
          <div className='last-tickets__city-left'>
            <div className='font-20'>Санкт-Петербург</div>
            <div className='font-16'>Курский вокзал</div>
          </div>
          <div className='last-tickets__city-right'>
            <div className='font-20'>Самара</div>
            <div className='font-16'>Московский вокзал</div>
          </div>
        </div>

        <div className='last-tickets__bottom'>
          <img src={filter4} alt="filter4"/>
          <div className='last-tickets__num'>
            <div className='font-16'>от</div>
            <div className='font-36 last-tickets__num-price'>2500</div>
            <img src={filter5} alt="filter5"/>
          </div>
        </div>
      </div>

      <div className='last-tickets__item'>
        <div className='last-tickets__city'>
          <div className='last-tickets__city-left'>
            <div className='font-20'>Москва</div>
            <div className='font-16'>Курский вокзал</div>
          </div>
          <div className='last-tickets__city-right'>
            <div className='font-20'>Казань</div>
            <div className='font-16'>Московский вокзал</div>
          </div>
        </div>

        <div className='last-tickets__bottom'>
          <img src={filter4} alt="filter4"/>
          <div className='last-tickets__num'>
            <div className='font-16'>от</div>
            <div className='font-36 last-tickets__num-price'>3500</div>
            <img src={filter5} alt="filter5"/>
          </div>
        </div>
      </div>

      <div className='last-tickets__item'>
        <div className='last-tickets__city'>
          <div className='last-tickets__city-left'>
            <div className='font-20'>Казань</div>
            <div className='font-16'>Курский вокзал</div>
          </div>
          <div className='last-tickets__city-right'>
            <div className='font-20'>Нижний новгород</div>
            <div className='font-16'>Московский вокзал</div>
          </div>
        </div>

        <div className='last-tickets__bottom'>
          <img src={filter4} alt="filter4"/>
          <div className='last-tickets__num'>
            <div className='font-16'>от</div>
            <div className='font-36 last-tickets__num-price'>3800</div>
            <img src={filter5} alt="filter5"/>
          </div>
        </div>
      </div>
    </div>
  )
}