import { machineData } from '../config/config'
import { useState, useEffect, lazy, Suspense } from 'react'
import Loader from '../components/Loader'
import style from '../styles/Dashboard.module.css'
import { Progress } from 'antd'
import iconKpi from '../assets/iconKpi.webp'

const DivsUsine = lazy(() => import('../components/dashboard/DivsUsine'))

const Dashboard = () => {
    const tpValue= 98;
    const tqValue = 40;
    const tdValue = 75;
  
    const getColor = (value) => {
        if (value >= 90) {
          return '#24ED38';
        } else if (value >= 50) {
          return '#FFE000';
        } else {
          return '#FF4C4C';
        }
      };
    const [time, setTime] = useState(new Date().toLocaleString())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div className={style.Content}>
                <div className={style.avOf}>
                    <span>Avancement OF</span>
                    <h3>60%</h3>
                </div>
                <Progress
                    percent={60}
                    percentPosition={{
                        align: 'end',
                        type: 'outer',
                    }}
                    size={['95%', 28]}
                    strokeColor="#AEAEAE"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                />
                <div className={style.wrapper}>
                    <div className={style.two}>
                        <span className={style.spanCard}>Enveloppeuse</span>
                        <h3 className={style.value}>60 <span>P/m</span></h3>
                    </div>
                    <div className={style.three}>
                        <div className={style.bigBloc}>
                        <span className={style.spanCard}>Qté realisé</span>
                        <h3 className={style.value}>60 <span>P/m</span></h3>
                        </div>
                        <div className={style.bigBloc2}>
                        <span className={style.spanCard}>Qté Objectif</span>
                        <h3 className={style.value}>60 <span>P/m</span></h3>
                        </div>
                        <div>

                        </div>

                        
                    </div>
                    <div className={style.four}>
                    <span className={style.spanCard}>COS</span>
                    <h3 className={style.value}>6 <span>P/m</span></h3>
                    </div>
                    <div className={style.five}>
                    <span className={style.spanCard}>Soud Connexion</span>
                    <h3 className={style.value}>604 <span>P/m</span></h3>
                    </div>
                    <div className={style.six}>
                    <span className={style.spanCard}>Soud Bac / couvercle</span>
                    <h3 className={style.value}>60 <span>P/m</span></h3>
                    </div>
                </div>
                <div className={style.KPI}>
                        <div className={style.trsRow}>
                            <img src={iconKpi} alt='icon' className={style.icons} />
                            <div className={style.trs}>
                                <div>
                                    <h2>TRS</h2>
                                    <p>Taux de rendement synthétique </p>
                                </div>
                                <div className={style.perc} ><span className={style.valueTrs}>98</span>%</div>
                            </div>
                        </div>
                        <div>
                        <div className={style.kpis}>
        <div className={style.trs2}>
          <div>
            <h2>TP</h2>
            <p>Taux de performance</p>
          </div>
          <div className={style.perc}>
            <span 
              className={style.valueTrs2} 
              style={{ color: getColor(tpValue) }}
            >
              {tpValue}%
            </span>
          </div>
        </div>
        <div className={style.trs2}>
          <div>
            <h2>TQ</h2>
            <p>Taux de qualité</p>
          </div>
          <div className={style.perc}>
            <span 
              className={style.valueTrs2} 
              style={{ color: getColor(tqValue) }}
            >
              {tqValue}%
            </span>
          </div>
        </div>
        <div className={style.trs2}>
          <div>
            <h2>TD</h2>
            <p>Taux de déchets</p>
          </div>
          <div className={style.perc}>
            <span 
              className={style.valueTrs2} 
              style={{ color: getColor(tdValue) }}
            >
              {tdValue}%
            </span>
          </div>
        </div>
      </div>
                            
                        </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
