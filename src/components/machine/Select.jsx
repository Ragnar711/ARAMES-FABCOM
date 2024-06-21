import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Select } from 'antd'

import style from '../../styles/Machine.module.css'

import Capitalize from '../../utils/strings'
import { machineData } from '../../config/config'

const Selector = () => {
    const [section, setSection] = useState('Sélectionner une Section')
    const [machineSelect, setMachineSelect] = useState(
        'Sélectionner une Machine'
    )

    const navigate = useNavigate()

    const handleMachineSelect = (value) => {
        navigate(`/machine/${value}`)
        setMachineSelect(value)
    }

    const sections = []
    const machines = []

    for (const section in machineData) {
        sections.push({
            value: section,
            label: Capitalize(section),
        })
    }

    if (machineData[section]) {
        for (const mach of machineData[section].machines) {
            machines.push({
                value: mach.machine,
                label: Capitalize(mach.machine),
            })
        }
    }

    const handleSectionSelect = (value) => {
        setSection(value)
    }

    return (
        <div className={style.buttonselect}>
            <Select
                defaultValue="Sélectionner une Section"
                className={style.selectButton}
                onChange={handleSectionSelect}
                options={[
                    {
                        value: 'Sélectionner une Section',
                        label: 'Sélectionner une Section',
                        disabled: true,
                    },
                    ...sections,
                ]}
            />
            <Select
                defaultValue="Sélectionner une Machine"
                className={style.selectButton}
                value={machineSelect}
                onChange={handleMachineSelect}
                options={[
                    {
                        value: 'Sélectionner une Machine',
                        label: 'Sélectionner une Machine',
                        disabled: true,
                    },
                    ...machines,
                ]}
            />
        </div>
    )
}

export default Selector
