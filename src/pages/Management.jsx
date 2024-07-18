import style from '../styles/Management.module.css'
import { Arrets, Dechet, NC, KPIdata } from '../utils/data'
import { useState, useEffect, lazy, Suspense } from 'react'
import { mgd } from '../utils/managementData'
import filtre from '../assets/filtre.png'
import recherche from '../assets/recherche.png'
import { DatePicker, Space, ConfigProvider, Table } from 'antd'
import Loader from '../components/Loader'
import { machineData } from '../config/config'
const ManagementKPI = lazy(() => import('../components/managment/ManagmentKPI'))
const ManagementData = lazy(() =>
    import('../components/managment/ManagmentData')
)
const Button = lazy(() => import('../components/historique/Button'))
const users = ['user1', 'user2', 'user3', 'user4']
const GenericSelect = lazy(() =>
    import('../components/historique/GenericSelect')
)
const Popup = lazy(() => import('../components/managment/Popup'))
const Select = lazy(() => import('../components/historique/Select'))
const Managment = () => {
    const [clicked, setClicked] = useState(false)
    // State variables
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState({
        kpi: null,
        arret: null,
        NC: null,
        dechets: null,
    })
    const [selectedTables, setSelectedTables] = useState([])
    const filteredData = {
        KPIdata: KPIdata,
        Arrets: Arrets,
        Dechet: Dechet,
        NC: NC,
    }
    const [filters, setFilters] = useState({
        machine: null,
        from: new Date().toISOString().split('T')[0],
        to: new Date().toISOString().split('T')[0],
    })
    const [chartData, setChartData] = useState({
        kpi: [],
        arrets: [],
        dechets: [],
        NC: [],
    })
    const [process, setProcess] = useState('')
    const [machines, setMachines] = useState([])
    const getData = async () => {
        let callGetData = true
        for (const key in filters) {
            if (filters[key] === null) {
                callGetData = false
                break
            }
        }
        if (callGetData) {
            if (mgd.success) {
                setData(mgd.data)
                setChartData({
                    ...chartData,
                    kpi: mgd.data.kpi.chart,
                    arrets: mgd.data.arret.chart,
                    dechets: mgd.data.dechets.chart,
                    NC: mgd.data.NC.chart,
                })
            }
        }
    }
    useEffect(() => {
        getData()
    }, [filters])
    // Process and machine options
    const processOptions = [{ label: 'Section1', value: 'Section1' }]
    const machineOptions = {
        Section1: [{ label: 'Machine-1', value: 'machine1' }],
    }
    // Table headers
    const createHeaders = (keys) => keys.map((key) => ({ label: key, key }))
    const kpiHeaders = createHeaders([
        'Date',
        'OF',
        'Opérateur',
        'TD',
        'TP',
        'TQ',
        'TRS',
    ])
    const manDataHeaders = createHeaders([
        'Date',
        'OF',
        'Quantité',
        'Motif',
        'Opérateur',
    ])
    const arretHeaders = createHeaders([
        'Date',
        'OF',
        'Durée',
        'Motif',
        'Opérateur',
    ])
    const changeFilter = (filterName = null, value = null) => {
        if (filterName !== null && value !== null) {
            setFilters({ ...filters, [filterName]: value })
        }
    }
    // Event handlers and utility functions
    const handleClose = () => setShowModal(false)
    const handleProcessChange = (event) => {
        const selectedProcess = event.target.value
        setProcess(selectedProcess)
        setMachines(machineOptions[selectedProcess])
    }
    const toggleTable = (tableId, data, headers) => {
        setSelectedTables((prevSelectedTables) =>
            prevSelectedTables.some((table) => table.id === tableId)
                ? prevSelectedTables.filter((table) => table.id !== tableId)
                : [...prevSelectedTables, { id: tableId, data, headers }]
        )
    }
    const prepareDataForCSV = (tables) => {
        let formattedData = []
        tables.forEach((table, index) => {
            formattedData.push(table.headers.map((header) => header.label))
            table.data.forEach((row) => {
                formattedData.push(
                    table.headers.map((header) => row[header.key])
                )
            })
            if (index !== tables.length - 1) {
                formattedData.push([])
            }
        })
        return formattedData
    }
    const handleSelect = (event) => {
        const selectedValue = event.target.value
        switch (selectedValue) {
            case 'csv':
                setShowModal(true)
                break
            case 'pdf':
                break
            default:
                break
        }
    }
    return (
        <div>
            {showModal && (
                <Suspense fallback={<div>Loading...</div>}>
                    <Popup
                        handleClose={handleClose}
                        toggleTable={toggleTable}
                        filteredData={filteredData}
                        kpiHeaders={kpiHeaders}
                        arretHeaders={arretHeaders}
                        manDataHeaders={manDataHeaders}
                        selectedTables={selectedTables}
                        prepareDataForCSV={prepareDataForCSV}
                    />
                </Suspense>
            )}
            <div className={style.filters}>
                <p className={style.title}>
                    <img alt="icon" src={filtre} /> Filtre de recherche
                </p>
                <div className={style.content}>
                    <div className={style.select}>
                        <div className={style.div1}>
                            <Suspense fallback={<Loader />}>
                                <Select style={style} data={machineData} />
                            </Suspense>
                        </div>
                     
                    
                    </div>
                    <div className={style.date}>
                        <Suspense fallback={<Loader />}>
                            <Button text="Afficher J-1" style={style} />
                            <Button text="Afficher W-1" style={style} />
                            <Button text="Afficher M-1" style={style} />
                        </Suspense>
                        <div className={style.calendar}>
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
                                    <DatePicker placeholder="De: xx/xx/xxxx" />
                                    <DatePicker placeholder="À : xx/xx/xxxx" />
                                </Space>
                            </div>
                        </div>
                    </div>
                    <div className={style.recherche}>
                        <img src={recherche} alt="recherche" />
                        <button>Recherche</button>
                    </div>
                </div>
            </div>
            <div id="pdf">
                <Suspense fallback={<div>Loading...</div>}>
                    <ManagementKPI data={data.kpi} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <ManagementData
                        data={data.arret}
                        displayData={chartData.arrets}
                        headers={arretHeaders}
                        title="arrêts"
                        yAxisLabel="Durée"
                        IDPareto="arretsPareto"
                        IDPie="arretsPie"
                    />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <ManagementData
                        data={data.dechets}
                        displayData={chartData.dechets}
                        headers={manDataHeaders}
                        title="déchets"
                        yAxisLabel="Quantitée"
                        IDPareto="dechetPareto"
                        IDPie="dechetPie"
                    />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <ManagementData
                        data={data.NC}
                        displayData={chartData.NC}
                        headers={manDataHeaders}
                        title="NC"
                        yAxisLabel="Quantitée"
                        IDPareto="NCPareto"
                        IDPie="NCPie"
                    />
                </Suspense>
            </div>
        </div>
    )
}

export default Managment
