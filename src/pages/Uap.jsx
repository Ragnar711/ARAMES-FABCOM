import { machineData } from '../config/config'
import { useState, useEffect, lazy, Suspense } from 'react'
import Loader from '../components/Loader'

const DivsSection = lazy(() => import('../components/uap/DivsSection'))

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
            <p
                style={{
                    fontSize: '0.4rem',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding: '0.2rem',
                }}
            >
                {time}
            </p>
            {machineData[section].machines.map((machine) => (
                <Suspense fallback={<Loader />} key={machine}>
                    <DivsSection machineData={machine} />
                </Suspense>
            ))}
        </>
    )
}

export default Uap
