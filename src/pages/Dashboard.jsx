import MesDivs from '../components/dashboard/DivsUsine'
import { machineData } from '../config/config'
import { useState, useEffect } from 'react'

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
                <MesDivs key={key} machineData={machineData[key]} />
            ))}
        </>
    )
}

export default Dashboard
