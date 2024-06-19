import MesDivs from '../components/dashboard/DivsUsine'
import { machineData } from '../config/config'

const Dashboard = () => {
    return (
        <>
            {Object.keys(machineData).map((key) => {
                return <MesDivs key={key} machineData={machineData[key]} />
            })}
        </>
    )
}

export default Dashboard
