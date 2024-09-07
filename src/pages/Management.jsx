import { useState, lazy, Suspense } from 'react'
import filtre from '../assets/filtre.png'
import Loader from '../components/Loader'
import style from '../styles/Management.module.css'
import { machineData } from '../config/config'
import { useEffect } from 'react'

const ManagmentData = lazy(() =>
    import('../components/managment/ManagmentData')
)
const ManagmentKPI = lazy(() => import('../components/managment/ManagmentKPI'))
const Button = lazy(() => import('../components/historique/Button'))

const Managment = () => {
    const [data, setData] = useState({})
    const [uap, setUap] = useState('')
    const uaps = Object.keys(machineData)
    const [machine, setMachine] = useState('tbs')
    const [clicked, setClicked] = useState(false)
    const today = new Date()
    const yesterday = new Date(today.getTime() - 1000 * 60 * 60 * 24)
    const [dateDebut, setDateDebut] = useState(
        today.toISOString().slice(0, 10) + 'T00:00:00.000Z'
    )
    const [dateFin, setDateFin] = useState(
        yesterday.toISOString().slice(0, 10) + 'T00:00:00.000Z'
    )

    const fetchData = async () => {
        const url = `http://${window.location.hostname}:3001/api/v1/management/${machine}/${dateDebut}/${dateFin}`
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
        setClicked(true)
    }

    useEffect(() => {
        fetchData()
    }, [dateDebut, dateFin, machine])

    return (
        <div>
            <p className={style.title}>
                <img alt="icon" src={filtre} /> Filtre de recherche
            </p>
            <div className={style.filtre}>
                <div className={style.selectDiv}>
                    {' '}
                    <select
                        className={style.buttonfiltre}
                        onChange={(e) => setUap(e.target.value)}
                        value={uap}
                    >
                        <option value="" disabled>
                            Section
                        </option>
                        {uaps.map((uap) =>
                            machineData[uap].machines.length !== 0 ? (
                                <option key={uap} value={uap}>
                                    {uap}
                                </option>
                            ) : null
                        )}
                    </select>
                    <select
                        className={style.buttonfiltre}
                        value={machine}
                        onChange={(e) => setMachine(e.target.value)}
                    >
                        <option value="" disabled>
                            Machine
                        </option>
                        {machineData[uap]?.machines.map((machine) => (
                            <option key={machine.machine} value={machine.value}>
                                {machine.machine}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={style.date}>
                    <button
                        className={style.buttonSecondFiltre}
                        onClick={() => {
                            const now = new Date()
                            const yesterday = new Date(
                                now.getTime() - 1000 * 60 * 60 * 24
                            )
                            setDateDebut(
                                `${
                                    yesterday.toISOString().split('T')[0]
                                }T00:00:00.000Z`
                            )
                            setDateFin(
                                `${
                                    now.toISOString().split('T')[0]
                                }T23:59:59.999Z`
                            )
                        }}
                    >
                        Afficher J-1
                    </button>
                    <button
                        className={style.buttonSecondFiltre}
                        onClick={() => {
                            const now = new Date()
                            const lastWeek = new Date(
                                now.getTime() - 1000 * 60 * 60 * 24 * 7
                            )
                            setDateDebut(
                                `${
                                    lastWeek.toISOString().split('T')[0]
                                }T00:00:00.000Z`
                            )
                            setDateFin(
                                `${
                                    now.toISOString().split('T')[0]
                                }T23:59:59.999Z`
                            )
                        }}
                    >
                        Afficher W-1
                    </button>
                    <button
                        className={style.buttonSecondFiltre}
                        onClick={() => {
                            const now = new Date()
                            const lastWeek = new Date(
                                now.getTime() - 1000 * 60 * 60 * 24 * 30
                            )
                            setDateDebut(
                                `${
                                    lastWeek.toISOString().split('T')[0]
                                }T00:00:00.000Z`
                            )
                            setDateFin(
                                `${
                                    now.toISOString().split('T')[0]
                                }T23:59:59.999Z`
                            )
                        }}
                    >
                        Afficher M-1
                    </button>
                    <button
                        className={style.buttonSecondFiltre}
                        onClick={() => {
                            const now = new Date()
                            const lastWeek = new Date(
                                now.getTime() - 1000 * 60 * 60 * 24 * 365
                            )
                            setDateDebut(
                                `${
                                    lastWeek.toISOString().split('T')[0]
                                }T00:00:00.000Z`
                            )
                            setDateFin(
                                `${
                                    now.toISOString().split('T')[0]
                                }T23:59:59.999Z`
                            )
                        }}
                    >
                        Afficher Y-1
                    </button>

                    {/* <div className={style.calendar}>
                        <Suspense fallback={<Loader />}>
                            <Button
                                text="Calendrier"
                                style={style}
                                onClick={() => setClicked(!clicked)}
                            />
                        </Suspense>
                        <div
                            style={{
                                display: clicked ? 'block' : 'none',
                                width: 'max-content',
                            }}
                        >
                            <Space direction="horizontal">
                                <DatePicker
                                    placeholder="De: xx/xx/xxxx"
                                    onChange={(date) => {
                                        const year = date['$y']
                                        const month = date['$M']
                                        const day = date['$D']
                                        setDateDebut(
                                            `${year}-${
                                                month > 9 ? month : `0${month}`
                                            }-${
                                                day > 9 ? day : `0${day}`
                                            }T00:00:00.000Z`
                                        )
                                    }}
                                />
                                <DatePicker
                                    placeholder="À : xx/xx/xxxx"
                                    onChange={(date) => {
                                        const year = date['$y']
                                        const month = date['$M']
                                        const day = date['$D']
                                        setDateFin(
                                            `${year}-${
                                                month > 9 ? month : `0${month}`
                                            }-${
                                                day > 9 ? day : `0${day}`
                                            }T00:00:00.000Z`
                                        )
                                    }}
                                />
                            </Space>
                        </div>
                    </div> */}
                </div>
            </div>
            <div id="pdf">
                <Suspense fallback={<Loader />}>
                    <ManagmentKPI data={data?.kpi ?? []} />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <ManagmentData
                        data={data?.arret ?? {}}
                        title="arrêts"
                        yAxisLabel="Durée"
                        IDPareto="arretsPareto"
                        IDPie="arretsPie"
                    />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <ManagmentData
                        data={data?.dechet ?? {}}
                        title="déchets"
                        yAxisLabel="Quantité"
                        IDPareto="dechetPareto"
                        IDPie="dechetPie"
                    />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <ManagmentData
                        data={data?.nc ?? {}}
                        title="NC"
                        yAxisLabel="Quantité"
                        IDPareto="NCPareto"
                        IDPie="NCPie"
                    />
                </Suspense>
            </div>
        </div>
    )
}

export default Managment
