import User from '../../assets/usericon.png'
import alert from '../../assets/alert.png'

import { getPoste } from '../../utils/getPoste'

const Bloc1 = ({ style, machineData }) => {
    const uap = machineData.section

    const state = false

    return (
        <div className={style.bloc1}>
            <h2 className={style.title}>{`UAP - ${uap.split('-')[1]}`}</h2>
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
