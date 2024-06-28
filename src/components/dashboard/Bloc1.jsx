import User from '../../assets/usericon.png'
import alert from '../../assets/alert.png'

import { getPoste } from '../../utils/getPoste'

const Bloc1 = ({ style, machineData }) => {
    const uap = machineData.section

    return (
        <div className={style.bloc1}>
            <h2 className={style.title}>{`UAP - ${uap.split('-')[1]}`}</h2>
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
            <div className={style.user}>
                <img className={style.iconUser} src={User} alt="user" />
                <span className={style.userText}>
                    Chef d'équipe - poste: {getPoste()}
                </span>
            </div>
        </div>
    )
}

export default Bloc1
