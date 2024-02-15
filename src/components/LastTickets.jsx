import React, {useEffect, useState} from 'react';
import '../assets/style/LastTickets.scss'
import {lastRoutes} from "../common/api";
import LastTicketsItem from "./LastTicketsItem";

export default function LastTickets() {
  const [list, setList] = useState([])

  useEffect(() => {
    lastRoutes()
      ?.then((data) => {
        setList(data)
      })
  }, [])

  return(
    <div className='last-tickets'>
      <div className='last-tickets__title font-30'>Последние билеты</div>

      { list.map((item, i) => <LastTicketsItem key={i} data={item}/>) }
    </div>
  )
}