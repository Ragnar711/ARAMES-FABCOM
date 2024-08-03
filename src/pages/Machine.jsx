import React from 'react'
import Alerte from '../components/machine/Alerte'
import style from '../styles/Machine.module.css'
const Machine = () => {
  return (
    <div className={style.Content}>
        <div>
            
      <Alerte />
      <Alerte />
      <Alerte />
        </div>
    </div>
  )
}

export default Machine
