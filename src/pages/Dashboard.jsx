import MesDivs from '../components/dashboard/DivsUsine'

import ligne from '../assets/ligne.png'

const machineData = {
    extrusionPE: {
        image: ligne,
        section: 'Extrusion-PE',
        sec: 'extrusionPE',
    },
}

const Dashboard = () => {
    const data = []
    return (
        <>
            {Object.keys(data).map((key, index) => {
                return (
                    <MesDivs
                        key={index}
                        data={data[key]}
                        machineData={machineData[key]}
                    />
                )
            })}
        </>
    )
}

export default Dashboard
