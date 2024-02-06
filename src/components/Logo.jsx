import React, {useState} from 'react';
import UIInput from "./UIComponents/UIInput";
import UIDatePicker from "./UIComponents/UIDatePicker";
import '../assets/style/Logo.scss'
import UISelect from "./UIComponents/UISelect";
import { HashLink as Link } from 'react-router-hash-link';

export default function Logo({ type }) {
  const [cityFrom, setCityFrom] = useState('');
  const [cityTo, setCityTo] = useState('');

  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  return(
    <div className='logo'>
      <div className={ type === 'main' ? 'main-logo main' : 'main-logo train' }>
        <div className='main-logo__text'>Лого</div>
        <div className='main-logo__menu'>
          <div className='main-logo__menu-item'><Link to="#about">О нас</Link></div>
          <div className='main-logo__menu-item'><Link to="#howWork">Как это работает</Link></div>
          <div className='main-logo__menu-item'><Link to="#reviews">Отзывы</Link></div>
          <div className='main-logo__menu-item'><Link to="#contacts">Контакты</Link></div>
        </div>

        {type === 'main' ?
          <div className='main-logo__main'>
            <div className='main-logo__tagline'>Вся жизнь - <br/><b>путешествие!</b></div>
            <div className='main-logo__main-inputs'>
              <div className='main-logo__main-inputs-text'>Направление</div>
              <div className='main-logo__main-inputs-item'>
                <UIInput placeholder="Откуда" value={ cityFrom } setValue={ setCityFrom }/>
                <UIInput placeholder="Куда" value={ cityTo } setValue={ setCityTo }/>
              </div>
              <div className='main-logo__main-inputs-text'>Дата</div>
              <div className='main-logo__main-inputs-item'>
                <UIDatePicker value={dateFrom} setValue={setDateFrom}/>
                <UIDatePicker value={dateTo} setValue={setDateTo}/>
              </div>
            </div>
          </div> :

          <div className='main-logo__train'>
            <div className='main-logo__train-inputs'>
              <div className='main-logo__train-container'>
                <div className='font-30'>Направление</div>
                <div className='main-logo__train-input'>
                  <UISelect placeholder={'Откуда'} value={ cityFrom } setValue={ setCityFrom }/>
                  <UISelect placeholder={'Куда'} value={ cityTo } setValue={ setCityTo }/>
                </div>
              </div>
              <div className='main-logo__train-container'>
                <div className='font-30'>Дата</div>
                <div className='main-logo__train-input'>
                  <UIDatePicker value={ dateFrom } setValue={ setDateFrom }/>
                  <UIDatePicker value={ dateTo } setValue={ setDateTo }/>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}