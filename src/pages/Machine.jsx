import style from '../styles/Machine.module.css'
import { useState, useEffect } from 'react'
import alerte from '../assets/arret.png'
// const data1 = [
//     {
//         name: 'Défaut 7',
//         uv: 35,
//     },
//     {
//         name: 'Défaut 6',
//         uv: 27,
//     },
//     {
//         name: 'Défaut 3',
//         uv: 20,
//     },
//     {
//         name: 'Défaut 2',
//         uv: 15,
//     },
//     {
//         name: 'Défaut 5',
//         uv: 13,
//     },
//     {
//         name: 'Défaut 8',
//         uv: 11,
//     },
//     {
//         name: 'Défaut 1',
//         uv: 10,
//     },
//     {
//         name: 'Défaut 4',
//         uv: 7,
//     },
// ]

// const data2 = [
//     {
//         name: 'Arrêt 4',
//         uv: 180,
//     },
//     {
//         name: 'Arrêt 3',
//         uv: 120,
//     },
//     {
//         name: 'Arrêt 2',
//         uv: 85,
//     },
//     {
//         name: 'Arrêt 5',
//         uv: 45,
//     },
//     {
//         name: 'Arrêt 1',
//         uv: 15,
//     },
// ]

function Machine() {
    const [time, setTime] = useState(new Date().toLocaleString())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000)

        return () => clearInterval(interval)
    }, [])
    return (
        <>
            <div className={style.Content}>
                <div className={style.ColumnDiv}>
                    <div className={style.arret}>
                        <img src={alerte} alt="" />
                        <div className={style.firstArret}>
                            <span>Déclaration arret</span>
                        </div>
                        <div className={style.column}>
                            <span className={style.blackSpan}>Date et heure</span>
                            <div>15/02/2024 02:30:15</div>
                        </div>

                        <div className={style.column} >
                            <span className={style.blackSpan}>Durée</span>
                            <span>00:12:15</span>
                        </div>
                    </div>
                    <div className={style.arret}>
                    <img src={alerte} alt="" />
                        <div>
                            <span className={style.firstArret}>Déclaration arret</span>
                        </div>
                        <div className={style.column}>
                            <span className={style.blackSpan}>Date et heure</span>
                            <div>15/02/2024 02:30:15</div>
                        </div>

                        <div className={style.column} >
                            <span className={style.blackSpan}>Durée</span>
                            <span>00:12:15</span>
                        </div>
                    </div>
                    <div className={style.arret}>
                    <img src={alerte} alt="" />
                        <div>
                            <span className={style.firstArret}>Déclaration arret</span>
                        </div>
                        <div className={style.column}>
                            <span className={style.blackSpan}>Date et heure</span>
                            <div>15/02/2024 02:30:15</div>
                        </div>

                        <div className={style.column} >
                            <span className={style.blackSpan}>Durée</span>
                            <span>00:12:15</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Machine
