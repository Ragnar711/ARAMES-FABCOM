import User from '../../assets/usericon.png'
import alert from '../../assets/alert.png'
import { getPoste } from '../../utils/getPoste'

const Bloc1 = ({ style, sequenceNumber, machineData }) => {
    const machine =
        machineData.machine.split('-')[
            machineData.machine.split('-').length - 1
        ]

    const state = false

    return (
        <div className={style.bloc1}>
            <h2
                className={style.title_machine}
            >{`Extrusion  - ${machine}`}</h2>
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
                    style={{ width: state ? '90%' : '70%' }}
                    src={machineData.image}
                    alt="machine"
                />
                {state ? null : (
                    <img
                        src={alert}
                        alt="alert"
                        style={{
                            width: '20%',
                            aspectRatio: '1.5/1',
                        }}
                    />
                )}
            </div>
        </div>
    )
}

export default Bloc1
