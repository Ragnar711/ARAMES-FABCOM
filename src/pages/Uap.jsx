import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DivsSections from '../components/uap/DivSection'
import ligne from '../assets/ligne.png'

const machineData = {
    extrusionPE: {
        machine6: {
            image: ligne,
            value: 95,
            machine: 'Ligne-6',
            mach: 'machine6',
        },
        machine7: {
            image: ligne,
            value: 95,
            machine: 'Ligne-7',
            mach: 'machine7',
        },
        machine9: {
            image: ligne,
            value: 95,
            machine: 'Ligne-9',
            mach: 'machine9',
        },
        machine10: {
            image: ligne,
            value: 95,
            machine: 'Ligne-10',
            mach: 'machine10',
        },
        machine11: {
            image: ligne,
            value: 95,
            machine: 'Ligne-11',
            mach: 'machine11',
        },
    },
}

// Get the current date
const yesterday = new Date()

// Get yesterday's date
const currentDate = new Date(yesterday)
currentDate.setDate(currentDate.getDate() + 1)

const Uap = () => {
    const data = []
    const [validSection, setValidSection] = useState(false)
    const { section } = useParams()

    useEffect(() => {
        if (Object.keys(machineData).includes(section)) {
            setValidSection(true)
        }
    }, [section])

    return (
        <>
            {validSection ? (
                Object.keys(data).map((key, index) => {
                    return (
                        <DivsSections
                            key={index}
                            data={data[key]}
                            machineData={machineData[section][key]}
                        />
                    )
                })
            ) : (
                <div>
                    <span>Section n&apos;existe pas</span>
                </div>
            )}
        </>
    )
}

export default Uap
