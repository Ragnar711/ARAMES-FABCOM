import assemblage from '../assets/assemblage.png'
import plaque from '../assets/plaque.png'
import charge from '../assets/charge.png'
import mach from '../assets/mach.png'

export const machineData = {
    'UAP-Assemblage': {
        image: assemblage,
        section: 'UAP-Assemblage',
        sec: 'UAP-Assemblage',
        machines: [
            { machine: 'Lin assemblage TBS', image: mach },
            { machine: 'Ligne assemblage 1', image: mach },
        ],
    },
    'UAP-Plaque': {
        image: plaque,
        section: 'UAP-Plaque',
        sec: 'UAP-Plaque',
        machines: [
            { machine: 'Lin assemblage TBS', image: mach },
            { machine: 'Ligne assemblage 1', image: mach },
        ],
    },
    'Charge Finition': {
        image: charge,
        section: 'Charge Finition',
        sec: 'Charge-Finition',
        machines: [
            { machine: 'Lin assemblage TBS', image: mach },
            { machine: 'Ligne assemblage 1', image: mach },
        ],
    },
}
