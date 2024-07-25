import { machineData } from '../config/config'
import { useState, useEffect, lazy, Suspense } from 'react'
import Loader from '../components/Loader'

import style from '../styles/Section.module.css'
import mach from '../assets/mach.png'

const DivsSection = lazy(() => import('../components/uap/DivsSection'))
const Select = lazy(() => import('../components/uap/Select'))

const Uap = () => {
    const [time, setTime] = useState(new Date().toLocaleString())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const section = window.location.pathname.split('/')[2]

    return (
        <>
          <div className={style.Content}>
                <div className={style.OFdeclaration}>
                  <div className={style.rowOF}>
                    <div >
                    <h4>N°OF</h4>
                    <span className={style.declaration}>Numéro de l'order de fabrication</span>
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    
                  </div>
                  <div className={style.rowOF}>
                    <div >
                    <h4>Réf Art</h4>
                    <span className={style.declaration}>Référence de l'article à réaliser</span>
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    
                  </div>
                  <div className={style.rowOF}>
                    <div >
                    <h4>Qté Obj</h4>
                    <span className={style.declaration}>Quantité objectif à réaliser</span>
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    
                  </div>
                  <div className={style.rowOF}>
                    <div >
                    <h4>Cad Thé </h4>
                    <span className={style.declaration}>Cadence théorique de la ligne</span>
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    
                  </div>
                  <div className={style.machine}>
                    
                  <img src={mach}alt="" />
                  </div>
                </div>

          </div>
        </>
    )
}

export default Uap
