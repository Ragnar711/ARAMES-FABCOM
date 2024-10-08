import assemblage from '../assets/assemblage.png'
import mach from '../assets/mach.png'

export const machineData = {
    'UAP-Assemblage': {
        status: true,
        image: assemblage,
        section: 'UAP-Assemblage',
        machines: [
            { machine: "Ligne-d'assemblage-TBS", image: mach, value: 'tbs' },
            // {
            //     machine: "Ligne-d'assemblage-1-SOVEMA",
            //     image: mach,
            //     value: 'sovema1',
            // },
            // {
            //     machine: "Ligne-d'assemblage-2-SOVEMA",
            //     image: mach,
            //     value: 'sovema2',
            // },
        ],
    },
    // 'UAP-Plaque': {
    //     status: false,
    //     image: plaque,
    //     section: 'UAP-Plaque',
    //     machines: [],
    // },
    // 'Charge-Finition': {
    //     status: false,
    //     image: charge,
    //     section: 'Charge-Finition',
    //     machines: [],
    // },
}
