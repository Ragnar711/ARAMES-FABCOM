import { machineData } from '../config/config'
import { useState, useEffect, lazy, Suspense } from 'react'
import Loader from '../components/Loader'

import style from '../styles/Section.module.css'

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
            <div className={style.top}>
                <Suspense fallback={<Loader />}>
                    <Select data={machineData} style={style} />
                </Suspense>
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
