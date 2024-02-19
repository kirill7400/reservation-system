import React, {useCallback, useEffect, useRef, useState} from 'react';
import UIInput from "./UIComponents/UIInput";
import UIDatePicker from "./UIComponents/UIDatePicker";
import '../assets/style/Logo.scss'
import {HashLink as Link} from 'react-router-hash-link';
import {debounce} from "@mui/material";
import UISearchRes from "./UIComponents/UISearchRes";
import {findRoutes, getCities} from "../common/api";
import UIButton from "./UIComponents/UIButton";
import {useNavigate} from "react-router-dom";
import UIModal from "./UIComponents/UIModal";

export default function Logo({ type, state, changeRoutes }) {
  const initSelectedCity = {
    fromId: '',
    toId: '',
    fromName: '',
    toName: '',
    dateStart: '',
    dateEnd: ''
  }

  const [cityFrom, setCityFrom] = useState('');
  const [cityTo, setCityTo] = useState('');
  const [selectedCity, setSelectedCity] = useState(initSelectedCity);
  const [valueType, setValueType] = useState('');
  const [isSet, setIsSet] = useState(false);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [fromCitiesList, setFromCitiesList] = useState([]);

  const initModalConfig = {
    show: false,
    message: ''
  }
  const [modalConfig, setModalConfig] = useState(initModalConfig)

  const fromSearch = useRef(null)
  const cityFromEl = useRef(null)
  const cityToEl = useRef(null)

  const navigate = useNavigate();

  const setSearchValue = (v) => {
    setIsSet(true)
    if (valueType === 'from') {
      setCityFrom(v.name);
      setSelectedCity({...selectedCity, fromId: v['_id'], fromName: v.name})
    }
    else {
      setCityTo(v.name)
      setSelectedCity({...selectedCity, toId: v['_id'], toName: v.name})
    }
  }

  const load = useCallback(debounce((value, param) => {
    getCities(value, param)
      ?.then((data) => {
        let {left, top} = param.current.getBoundingClientRect()
        fromSearch.current.style.left = left + 'px'
        fromSearch.current.style.top = top + 60 + 'px'
        fromSearch.current.style.display = 'flex'

        setFromCitiesList(data)
      })
  }, 500), []);

  useEffect(() => {
    setValueType('from')
    !isSet && load(cityFrom, cityFromEl)
    setIsSet(false)
  }, [cityFrom])

  useEffect(() => {
    setValueType('to')
    !isSet && load(cityTo, cityToEl)
    setIsSet(false)
  }, [cityTo])

  useEffect(() => {
    setSelectedCity({...selectedCity, dateStart: dateFrom, dateEnd: dateTo })
  }, [dateFrom, dateTo])

  useEffect(() => {
    if (state) {
      setIsSet(true)
      //console.log(state)

      setCityFrom(state.selectedCity.fromName)
      setCityTo(state.selectedCity.toName)
      setDateFrom(state.selectedCity.dateStart)
      setDateTo(state.selectedCity.dateEnd)
      setSelectedCity(state.selectedCity)
    }
  }, [])

  const searchRoutes = () => {
    findRoutes(selectedCity)
      .then(data => {
        if (data?.items?.length) {
          navigate('/train-selection', { state: {result: data.items, selectedCity}});
        }
        else setModalConfig({ show: true, message: 'По данному маршруту не найдено поездов!' })
      })
  }

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

        <UISearchRes refSearch={fromSearch} list={fromCitiesList} setData={setSearchValue}/>
        <UIModal open={modalConfig} setOpen={setModalConfig}/>

        {type === 'main' ?
          <div className='main-logo__main'>
            <div className='main-logo__tagline'>Вся жизнь - <br/><b>путешествие!</b></div>
            <div className='main-logo__main-inputs'>
              <div className='main-logo__main-inputs-text'>Направление</div>
              <div className='main-logo__main-inputs-item'>
                <UIInput inputRef={ cityFromEl } placeholder="Откуда" value={ cityFrom } setValue={ setCityFrom }/>
                <UIInput inputRef={ cityToEl } placeholder="Куда" value={ cityTo } setValue={ setCityTo }/>
              </div>
              <div className='main-logo__main-inputs-text'>Дата</div>
              <div className='main-logo__main-inputs-item'>
                <UIDatePicker value={dateFrom} setValue={setDateFrom}/>
                <UIDatePicker value={dateTo} setValue={setDateTo}/>
              </div>

              <div className='main-logo__main-inputs-itemBtn'>
                <UIButton label={'Найти билеты'} color={'primary'} variant={'contained'} onClick={ searchRoutes }/>
              </div>
            </div>
          </div> :

          <div className='main-logo__train'>
            <div className='main-logo__train-inputs'>
              <div className='main-logo__train-inputsItems'>
                <div className='main-logo__train-container'>
                  <div className='font-30'>Направление</div>
                  <div className='main-logo__train-input'>
                    <UIInput inputRef={ cityFromEl } placeholder="Откуда" value={ cityFrom } setValue={ setCityFrom }/>
                    <UIInput inputRef={ cityToEl } placeholder="Куда" value={ cityTo } setValue={ setCityTo }/>
                  </div>
                </div>
                <div className='main-logo__train-container'>
                  <div className='font-30'>Дата</div>
                  <div className='main-logo__train-input'>
                    <UIDatePicker value={dateFrom} setValue={setDateFrom}/>
                    <UIDatePicker value={dateTo} setValue={setDateTo}/>
                  </div>
                </div>
              </div>

              <div className='main-logo__main-inputs-itemBtn'>
                <UIButton label={'Найти билеты'} color={'primary'} variant={'contained'} onClick={ () => changeRoutes(selectedCity) }/>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}