import { machineData } from '../config/config'
import { useState, useEffect, lazy, Suspense } from 'react'
import Loader from '../components/Loader'

const DivsUsine = lazy(() => import('../components/dashboard/DivsUsine'))

const Dashboard = () => {
    const [time, setTime] = useState(new Date().toLocaleString())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

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
            {Object.keys(machineData).map((key) => (
                <Suspense fallback={<Loader />} key={key}>
                    <DivsUsine machineData={machineData[key]} />
                </Suspense>
            ))}
        </>
    )
}

export default Dashboard
