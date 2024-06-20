import { Suspense, lazy } from 'react'
import Loader from '../Loader'
import oficon from '../../assets/ofIcon.webp'

const Of = lazy(() => import('./Of'))

const Ofs = ({ style, machines }) => {
    return (
        <div className={style.blocKpi}>
            <div className={style.titreImageOf}>
                <img src={oficon} alt="iconkpi" className={style.iconOf} />
                <h2>OF | Liste des OF encours</h2>
            </div>
            <div className={style.spans}>
                {machines.map((machine, index) => (
                    <Suspense fallback={<Loader />} key={index}>
                        <Of
                            style={style}
                            machine={machine.machine}
                            NOF={index + 1000}
                        />
                    </Suspense>
                ))}
            </div>
        </div>
    )
}

export default Ofs
