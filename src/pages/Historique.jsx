import style from '../styles/Historique.module.css'
import filtre from '../assets/filtre.png'
import recherche from '../assets/recherche.png'
import table from '../assets/table.png'
import Loader from '../components/Loader'
import { lazy, Suspense, useState, useEffect } from 'react'
import { machineData } from '../config/config'
import { DatePicker, Space, ConfigProvider, Table, Input } from 'antd'

const Button = lazy(() => import('../components/historique/Button'))

const columns = [
    {
        title: 'Post/heure',
        dataIndex: 'Post/heure',
    },
    {
        title: 'N°OF',
        dataIndex: 'N°OF',
    },
    {
        title: 'Qté Prod OK',
        dataIndex: 'Qté Prod OK',
        render: (text) => <span>{text.toFixed(2)} pcs</span>,
    },
    {
        title: 'Qté NC',
        dataIndex: 'Qté NC',
        render: (text) => <span>{text.toFixed(2)} pcs</span>,
    },
    {
        title: 'Arrêts',
        dataIndex: 'Arrêts',
    },
    {
        title: 'TRS',
        dataIndex: 'TRS',
        render: (text) => <span>{text.toFixed(2)} %</span>,
    },
    {
        title: 'Ref. Plaque',
        dataIndex: 'Ref. Plaque',
        colSpan: 0,
    },
    {
        title: 'Cons. Plaque',
        dataIndex: 'Cons. Plaque',
        colSpan: 2,
        render: (text) => <span>{text.toFixed(2)}</span>,
    },
    {
        title: 'Ref. Enveloppe',
        dataIndex: 'Ref. Enveloppe',
        colSpan: 0,
    },
    {
        title: 'Cons. Enveloppe',
        dataIndex: 'Cons. Enveloppe',
        colSpan: 2,
        render: (text) => <span>{text.toFixed(2)}</span>,
    },
    {
        title: 'Ref. Bac',
        dataIndex: 'Ref. Bac',
        colSpan: 0,
    },
    {
        title: 'Cons. Bac',
        dataIndex: 'Cons. Bac',
        colSpan: 2,
        render: (text) => <span>{text.toFixed(2)}</span>,
    },
    {
        title: 'Ref. Couvercle',
        dataIndex: 'Ref. Couvercle',
        colSpan: 0,
    },
    {
        title: 'Cons. Couvercle',
        dataIndex: 'Cons. Couvercle',
        colSpan: 2,
        render: (text) => <span>{text.toFixed(2)}</span>,
    },
]

const Historique = () => {
    const [clicked, setClicked] = useState(false)
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [uap, setUap] = useState('')
    const uaps = Object.keys(machineData)
    const [machine, setMachine] = useState('')
    const [dateDebut, setDateDebut] = useState('')
    const [dateFin, setDateFin] = useState('')
    const [of, setOf] = useState('')

    const fetchHistoriqueData = async () => {
        try {
            const res = await fetch(
                `http://${window.location.hostname}:3001/api/v1/historique/${machine}/${dateDebut}/${dateFin}`
            )
            const resData = await res.json()
            setData(resData)
            setFilteredData(resData)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (of !== '') {
            const filtered = data.filter((item) => item['N°OF'] === of)
            setFilteredData(filtered)
        } else {
            setFilteredData(data)
        }
    }, [of, data])

    return (
        <ConfigProvider
            theme={{
                components: {
                    DatePicker: {
                        colorBorder: 'black',
                        colorTextPlaceholder: 'black',
                    },
                    Table: {
                        headerBg: '#b3c6e7',
                        headerFilterHoverBg: '#b3c6e7',
                        headerSortActiveBg: '#b3c6e7',
                        headerSortHoverBg: '#b3c6e7',
                        headerSortUpBg: '#b3c6e7',
                        headerSortDownBg: '#b3c6e7',
                    },
                },
            }}
        >
            <div className={style.container}>
                <div className={style.filters}>
                    <p className={style.title}>
                        <img alt="icon" src={filtre} /> Filtre de recherche
                    </p>
                    <div className={style.content}>
                        <div className={style.select}>
                            <div className={style.div1}>
                                <div className={style.selects}>
                                    <select
                                        className={style.selector}
                                        onChange={(e) => setUap(e.target.value)}
                                        value={uap}
                                    >
                                        <option value="" disabled>
                                            Sélectionner UAP
                                        </option>
                                        {uaps.map((uap) =>
                                            machineData[uap].machines.length !==
                                            0 ? (
                                                <option key={uap} value={uap}>
                                                    {uap}
                                                </option>
                                            ) : null
                                        )}
                                    </select>
                                    <select
                                        className={style.selector}
                                        value={machine}
                                        onChange={(e) =>
                                            setMachine(e.target.value)
                                        }
                                    >
                                        <option value="" disabled>
                                            Sélectionner Ligne
                                        </option>
                                        {machineData[uap]?.machines.map(
                                            (machine) => (
                                                <option
                                                    key={machine.machine}
                                                    value={machine.value}
                                                >
                                                    {machine.machine}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div className={style.div2}>
                                <select className={style.selector}>
                                    <option value="" disabled>
                                        "Sélectionner Opérateur"
                                    </option>
                                </select>
                            </div>
                            <div className={style.div3}>
                                <Space.Compact>
                                    <Input
                                        style={{
                                            width: '20%',
                                            border: '1px solid black',
                                        }}
                                        defaultValue="OF"
                                        disabled
                                    />
                                    <Input
                                        style={{
                                            width: '80%',
                                            border: '1px solid black',
                                        }}
                                        value={of}
                                        onChange={(e) => setOf(e.target.value)}
                                    />
                                </Space.Compact>
                            </div>
                        </div>
                        <div className={style.date}>
                            <Suspense fallback={<Loader />}>
                                <Button
                                    text="Afficher J-1"
                                    style={style}
                                    onClick={() => {
                                        const now = new Date()
                                        const yesterday = new Date(
                                            now.getTime() - 1000 * 60 * 60 * 24
                                        )
                                        setDateDebut(
                                            `${
                                                yesterday
                                                    .toISOString()
                                                    .split('T')[0]
                                            }T00:00:00.000Z`
                                        )
                                        setDateFin(
                                            `${
                                                now.toISOString().split('T')[0]
                                            }T23:59:59.999Z`
                                        )
                                    }}
                                />
                                <Button
                                    text="Afficher W-1"
                                    style={style}
                                    onClick={() => {
                                        const now = new Date()
                                        const lastWeek = new Date(
                                            now.getTime() -
                                                1000 * 60 * 60 * 24 * 7
                                        )
                                        setDateDebut(
                                            `${
                                                lastWeek
                                                    .toISOString()
                                                    .split('T')[0]
                                            }T00:00:00.000Z`
                                        )
                                        setDateFin(
                                            `${
                                                now.toISOString().split('T')[0]
                                            }T23:59:59.999Z`
                                        )
                                    }}
                                />
                                <Button
                                    text="Afficher M-1"
                                    style={style}
                                    onClick={() => {
                                        const now = new Date()
                                        const lastWeek = new Date(
                                            now.getTime() -
                                                1000 * 60 * 60 * 24 * 30
                                        )
                                        setDateDebut(
                                            `${
                                                lastWeek
                                                    .toISOString()
                                                    .split('T')[0]
                                            }T00:00:00.000Z`
                                        )
                                        setDateFin(
                                            `${
                                                now.toISOString().split('T')[0]
                                            }T23:59:59.999Z`
                                        )
                                    }}
                                />
                            </Suspense>
                            <div className={style.calendar}>
                                <Suspense fallback={<Loader />}>
                                    <Button
                                        text="Afficher calendrier"
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
                                                        month > 9
                                                            ? month
                                                            : `0${month}`
                                                    }-${
                                                        day > 9
                                                            ? day
                                                            : `0${day}`
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
                                                        month > 9
                                                            ? month
                                                            : `0${month}`
                                                    }-${
                                                        day > 9
                                                            ? day
                                                            : `0${day}`
                                                    }T00:00:00.000Z`
                                                )
                                            }}
                                        />
                                    </Space>
                                </div>
                            </div>
                        </div>
                        <div className={style.recherche}>
                            <img src={recherche} alt="recherche" />
                            <button onClick={() => fetchHistoriqueData()}>
                                Recherche
                            </button>
                        </div>
                    </div>
                </div>
                <div className={style.table}>
                    <div className={style.table}>
                        <div className={style.table_title}>
                            <p className={style.title}>
                                <img alt="icon" src={table} /> Historique des
                                résultats - Ligne {machine.toUpperCase()} [de{' '}
                                {dateDebut.slice(0, 10)} à{' '}
                                {dateFin.slice(0, 10)}]
                            </p>
                            <div className={style.recherche}>
                                <img src={table} alt="excel" />
                                <button>Exporter</button>
                            </div>
                        </div>
                        <Table
                            columns={columns}
                            dataSource={filteredData ?? data}
                            pagination={false}
                        />
                    </div>
                </div>
            </div>
        </ConfigProvider>
    )
}

export default Historique
