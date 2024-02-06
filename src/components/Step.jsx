import React from 'react';
import '../assets/style/Step.scss'
import vector from '../assets/icons/vector.svg'

export default function Step({ num }) {
  return(
    <div className='step'>
      <div className={ num.includes(1) ? 'step-item step-active' : 'step-item' }>
        <div className='step-item__data'>
          <div className='font-30 step-item__number'>1</div>
          <div className='font-30 step-item__text'>Билеты</div>
        </div>
        {num.includes(2) ? <img className='step-item__icon step-active' src={vector} alt="vector"/> :
          num.includes(1) ? <div className='step-item__triangle'/> : <img className='step-item__icon' src={vector} alt="vector"/>}
      </div>
      <div className={num.includes(2) ? 'step-item step-active' : 'step-item' }>
      <div className='step-item__data'>
          <div className='font-30 step-item__number'>2</div>
          <div className='font-30 step-item__text'>Пассажиры</div>
        </div>
        {num.includes(3) ? <img className='step-item__icon step-active' src={vector} alt="vector"/> :
          num.includes(2) ? <div className='step-item__triangle'/> : <img className='step-item__icon' src={vector} alt="vector"/>}
      </div>
      <div className={ num.includes(3) ? 'step-item step-active' : 'step-item' }>
        <div className='step-item__data'>
          <div className='font-30 step-item__number'>3</div>
          <div className='font-30 step-item__text'>Оплата</div>
        </div>
        {num.includes(4) ? <img className='step-item__icon step-active' src={vector} alt="vector"/> :
          num.includes(3) ? <div className='step-item__triangle'/> : <img className='step-item__icon' src={vector} alt="vector"/>}
      </div>
      <div className={ num.includes(4) ? 'step-item step-active' : 'step-item' }>
        <div className='step-item__data'>
          <div className='font-30 step-item__number'>4</div>
          <div className='font-30 step-item__text'>Проверка</div>
        </div>
      </div>
    </div>
  )
}