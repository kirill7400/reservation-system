import React from 'react';
import '../../assets/style/UIComponents.scss'

export default function UISearchRes({ refSearch, list, setData }) {

  const handler = (e) => {
    let obj = list.find(i => i.name === e)
    setData(obj)
    refSearch.current.style.display = 'none'
  }

  return(
    <div className='UISearchRes' ref={ refSearch }>
      {
        list.length ? list.map((item, i) => <div className='UISearchRes-item' onClick={(e) => handler(e.target.textContent)} key={i}>{item.name}</div>) :
          <div className='UISearchRes-none'>Города не найдены!</div>
      }
    </div>
  )
}