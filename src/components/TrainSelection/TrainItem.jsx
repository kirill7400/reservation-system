import React from 'react';
import '../../assets/style/TrainItem.scss'
import list1 from "../../assets/icons/list1.svg";
import list2 from "../../assets/icons/list2.svg";
import list3 from "../../assets/icons/list3.svg";
import filter5 from "../../assets/icons/filter5.svg";
import filter4 from "../../assets/icons/filter4.svg";
import UIButton from "../UIComponents/UIButton";

export default function TrainItem() {
  return(
    <div className='train-list__item'>
      <div className='train-list__left'>
        <img className='train-list__left-logo' src={list1} alt="list1"/>
        <div className='train-list__left-text font-24'>116С</div>
        <div className='train-list__left-city'>
          <div className='font-16'>Адлер &#8594;</div>
          <div className='font-16'>Москва &#8594;</div>
          <div className='font-16'>Санкт-Петербург</div>
        </div>
      </div>

      <div className='train-list__center'>
        <div className='train-list__center-item'>
          <div className='train-list__center-left'>
            <div className='font-24'>00:10</div>
            <div className='font-18'>Москва</div>
            <div className='font-16'>Курский вокзал</div>
          </div>
          <div className='train-list__center-center'>
            <div className='font-18'>9 : 42</div>
            <img src={list2} alt="list2"/>
          </div>
          <div className='train-list__center-right'>
            <div className='font-24'>00:10</div>
            <div className='font-18'>Москва</div>
            <div className='font-16'>Курский вокзал</div>
          </div>
        </div>
        <div className='train-list__center-item'>
          <div className='train-list__center-left'>
            <div className='font-24'>00:10</div>
            <div className='font-18'>Москва</div>
            <div className='font-16'>Курский вокзал</div>
          </div>
          <div className='train-list__center-center'>
            <div className='font-18'>9 : 42</div>
            <img src={list3} alt="list3"/>
          </div>
          <div className='train-list__center-right'>
            <div className='font-24'>00:10</div>
            <div className='font-18'>Москва</div>
            <div className='font-16'>Курский вокзал</div>
          </div>
        </div>
      </div>

      <div className='train-list__right'>
        <div className='train-list__right-detailItem'>
          <div className='font-16 left'>Сидячий</div>
          <div className='font-16 center'>88</div>
          <div className='right'>
            <div className='font-16'>от</div>
            <div className='font-24'>1 920</div>
            <img src={filter5} alt="filter5"/></div>
        </div>
        <div className='train-list__right-detailItem'>
          <div className='font-16 left'>Плацкарт</div>
          <div className='font-16 center'>52</div>
          <div className='right'>
            <div className='font-16'>от</div>
            <div className='font-24'>1 920</div>
            <img src={filter5} alt="filter5"/></div>
        </div>
        <div className='train-list__right-detailItem'>
          <div className='font-16 left'>Купе</div>
          <div className='font-16 center'>88</div>
          <div className='right'>
            <div className='font-16'>от</div>
            <div className='font-24'>3 820</div>
            <img src={filter5} alt="filter5"/></div>
        </div>
        <div className='train-list__right-detailItem'>
          <div className='font-16 left'>Люкс</div>
          <div className='font-16 center'>15</div>
          <div className='right'>
            <div className='font-16'>от</div>
            <div className='font-24'>4 950</div>
            <img src={filter5} alt="filter5"/></div>
        </div>

        <div className='train-list__right-icons'>
          <img src={filter4} alt="filter4"/>
        </div>
        <UIButton label={'Выбрать места'} color={'primary'} variant={'contained'}/>
      </div>
    </div>
  )
}