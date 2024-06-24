import { useState, useEffect, lazy, Suspense } from 'react'

import style from '../styles/Historique.module.css'

const ManagmentData = lazy(() =>
    import('../components/managment/ManagmentData')
)
const ManagmentKPI = lazy(() => import('../components/managment/ManagmentKPI'))
const Popup = lazy(() => import('../components/managment/Popup'))

import Loader from '../components/Loader'

import fetchData from '../utils/fetchData'

const Managment = () => {
    // State variables
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState({
        kpi: null,
        arret: null,
        NC: null,
        dechets: null,
    })
    const [selectedTables, setSelectedTables] = useState([])
    const filteredData = {}
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
            const { error, status, data } = await fetchData(
                `/admin/management/${filters.machine}/${filters.from}/${filters.to}`,
                'GET'
            )
            if (status === 200 && data.success) {
                setData(data.data)
                setChartData({
                    ...chartData,
                    kpi: data.data.kpi.chart,
                    arrets: data.data.arret.chart,
                    dechets: data.data.dechets.chart,
                    NC: data.data.NC.chart,
                })
            } else {
                console.error(error)
            }
        }
    }
    useEffect(() => {
        getData()
    }, [filters])

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

    return (
        <div>
            {showModal && (
                <Suspense fallback={<Loader />}>
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
            <div className={style.filtre}>
                <div>
                    {' '}
                    <select
                        className={style.buttonfiltre}
                        value={process}
                        onChange={handleProcessChange}
                    >
                        <option value="" disabled>
                            Section
                        </option>
                        {processOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <select
                        className={style.buttonfiltre}
                        value={filters.machine ?? ''}
                        onChange={(event) => {
                            const value = event.target.value
                            if (value) {
                                changeFilter('machine', value)
                            }
                        }}
                    >
                        <option value="" disabled>
                            Machine
                        </option>
                        {machines.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <h3>Filtrage de Dates</h3>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button
                        className={style.buttonSecondFiltre}
                        onClick={() => {
                            let date = new Date()
                            const to = date.toISOString().split('T')[0]
                            date.setDate(date.getDate() - 1)
                            const from = date.toISOString().split('T')[0]
                            setFilters({ ...filters, from, to })
                        }}
                    >
                        J-1
                    </button>
                    <button
                        className={style.buttonSecondFiltre}
                        onClick={() => {
                            let date = new Date()
                            const to = date.toISOString().split('T')[0]
                            date.setDate(date.getDate() - 7)
                            const from = date.toISOString().split('T')[0]
                            setFilters({ ...filters, from, to })
                        }}
                    >
                        W-1
                    </button>
                    <button
                        className={style.buttonSecondFiltre}
                        onClick={() => {
                            let date = new Date()
                            const to = date.toISOString().split('T')[0]
                            date.setMonth(date.getMonth() - 1)
                            const from = date.toISOString().split('T')[0]
                            setFilters({ ...filters, from, to })
                            changeFilter()
                        }}
                    >
                        M-1
                    </button>

                    <input
                        id="startDateInput"
                        className={style.date}
                        type="date"
                        value={filters.from}
                        onChange={(event) =>
                            changeFilter('from', event.target.value)
                        }
                    />
                    <span style={{ fontSize: '14px', color: 'black' }}>à</span>
                    <input
                        id="endDateInput"
                        className={style.date}
                        type="date"
                        value={filters.to}
                        onChange={(event) =>
                            changeFilter('to', event.target.value)
                        }
                    />
                </div>
                {/*<h3>Exporter les données</h3>
                <button
                    className={style.exportData}
                    onClick={() => setShowModal(true)}
                >
                    <RiDownloadFill fontSize={20} />
                    Excel
                </button>*/}
            </div>
            <div id="pdf">
                <Suspense fallback={<Loader />}>
                    <ManagmentKPI data={data.kpi} />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <ManagmentData
                        data={data.arret}
                        displayData={chartData.arrets}
                        headers={arretHeaders}
                        title="arrêts"
                        yAxisLabel="Durée"
                        IDPareto="arretsPareto"
                        IDPie="arretsPie"
                    />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <ManagmentData
                        data={data.dechets}
                        displayData={chartData.dechets}
                        headers={manDataHeaders}
                        title="déchets"
                        yAxisLabel="Quantitée"
                        IDPareto="dechetPareto"
                        IDPie="dechetPie"
                    />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <ManagmentData
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
