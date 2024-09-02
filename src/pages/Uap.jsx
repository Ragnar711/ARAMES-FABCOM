import { machineData } from '../config/config'
import { useState, useEffect, lazy, Suspense } from 'react'
import Loader from '../components/Loader'
import style from '../styles/Section.module.css'

const DivsSection = lazy(() => import('../components/uap/DivsSection'))

const Uap = () => {
    const [time, setTime] = useState(new Date().toLocaleString())
    const uaps = Object.keys(machineData)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const section = window.location.pathname.split('/')[2]

    return (
        <>
            <div className={style.top}>
                <select className={style.select}>
                    <option value="" disabled selected>
                        Select UAP
                    </option>
                    {uaps.map((uap) => (
                        <option key={uap} value={uap}>
                            {uap}
                        </option>
                    ))}
                </select>
                <p className={style.time}>{time}</p>
            </div>
            {machineData[section].machines.map((machine, index) => (
                <Suspense fallback={<Loader />} key={machine}>
                    <DivsSection
                        machineData={machine}
                        sequenceNumber={index + 1}
                        style={style}
                    />
                </Suspense>
            ))}
        </>
    )
}

export default Uap
