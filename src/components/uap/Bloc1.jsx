import User from '../../assets/usericon.png'
import alert from '../../assets/alert.png'
import { getPoste } from '../../utils/getPoste'

const Bloc1 = ({ style, sequenceNumber, machineData }) => {
    const machine =
        machineData.machine.split('-')[
            machineData.machine.split('-').length - 1
        ]

    return (
        <div className={style.bloc1}>
            <h2
                className={style.title_machine}
            >{`Assemblage ${sequenceNumber} - ${machine}`}</h2>
            <div className={style.user}>
                <img className={style.iconUser} src={User} alt="user" />
                <span className={style.userText}>
                    Chef d'équipe - poste: {getPoste()}
                </span>
            </div>
            <div className={style.of}>
                <div>
                    <span className={style.TA}>05:00:00</span>
                    <span className={style.TM}>03:00:00</span>
                </div>
                <div>
                    <span className={style.T_text}>Temps d’arrêt I poste</span>
                    <span className={style.T_text}>
                        Temps de marche I Poste
                    </span>
                </div>
            </div>
            <div className={style.machineImage}>
                <img
                    className={style.imageMachine}
                    src={machineData.image}
                    alt="machine"
                />
                <img
                    src={alert}
                    alt="alert"
                    style={{
                        width: '4rem',
                        height: '2.5rem',
                    }}
                />
            </div>
        </div>
    )
}

export default Bloc1
