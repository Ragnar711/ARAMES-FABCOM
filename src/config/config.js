import assemblage from '../assets/assemblage.png'
import plaque from '../assets/plaque.png'
import charge from '../assets/charge.png'
import mach from '../assets/mach.png'

export const machineData = {
    'UAP-Assemblage': {
        status: true,
        image: assemblage,
        section: 'UAP-Assemblage',
        machines: [
            { machine: "Ligne-d'assemblage-TBS", image: mach },
            { machine: "Ligne-d'assemblage-1-SOVEMA", image: mach },
            { machine: "Ligne-d'assemblage-2-SOVEMA", image: mach },
        ],
    },
    'UAP-Plaque': {
        status: false,
        image: plaque,
        section: 'UAP-Plaque',
        machines: [],
    },
    'Charge-Finition': {
        status: false,
        image: charge,
        section: 'Charge-Finition',
        machines: [],
    },
}
