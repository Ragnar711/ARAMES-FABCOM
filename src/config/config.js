import extrusion from '../assets/extrusion.png'
import miraflex from '../assets/miraflex.png'
import confection from '../assets/confection.png'
import mach from '../assets/mach.png'

export const machineData = {
    'UAP-Extrusion': {
        status: true,
        image: extrusion,
        section: 'Unité-Extrusion',
        machines: [
            { machine: "Macchi 1", image: mach },
            { machine: "Macchi 2", image: mach },
            { machine: "Varex", image: mach },
        ],
    },
    'Unité-Impression': {
        status: false,
        image: miraflex ,
        section: 'Unité-Impression',
        machines: [],
    },
    'Unité-Confection': {
        status: false,
        image: confection,
        section: 'Unité-Confection',
        machines: [],
    },
}
