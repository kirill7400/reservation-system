import React, {useEffect, useState} from 'react';
import Logo from "../Logo";
import Step from "../Step";
import Footer from "../Footer";
import TrainFilter from "./TrainFilter";
import TrainList from "./TrainList";
import '../../assets/style/TrainSelection.scss'
import LastTickets from "../LastTickets";
import UIPagination from "../UIComponents/UIPagination";
import {useLocation} from "react-router-dom";
import {findRoutes} from "../../common/api";
import UIModal from "../UIComponents/UIModal";

export default function TrainSelection() {
  const {state} = useLocation();
  const [list, setList] = useState([])
  const [leftFilters, setLeftFilters] = useState({})

  const initModalConfig = {
    show: false,
    message: ''
  }
  const [modalConfig, setModalConfig] = useState(initModalConfig)

  const setFilters = (items) => {
    setLeftFilters(items)
  }

  useEffect(() => {
    setList([...state.result])
    setLeftFilters(state.selectedCity)
  }, []);

  const changeRoutes = (selectedCity) => {
    let filters = { ...leftFilters, ...selectedCity  }

    setLeftFilters(filters)

    findRoutes(filters)
      .then(data => {
        if (data?.items?.length) {
          setList([...data.items])
        }
        else setModalConfig({ show: true, message: 'По данному маршруту не найдено поездов!' })
      })
  }

  return (
    <div className='train-selection'>
      <UIModal open={modalConfig} setOpen={setModalConfig}/>
      <Logo type={'trainSelection'} state={ state } changeRoutes={ changeRoutes }/>
      <Step num={ [1] }/>

      <div className='train-selection__main'>
        <div className='train-selection__main-leftMenu'>
          <TrainFilter setFilters={setFilters}/>
          <LastTickets/>
        </div>

        <div className='train-selection__main-rightMenu'>
          <TrainList list={list} leftFilters={leftFilters}/>
          <UIPagination/>
        </div>
      </div>

      <Footer/>
    </div>
  )
}