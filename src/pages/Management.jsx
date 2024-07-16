import style from '../styles/Management.module.css'
import { Arrets, Dechet, NC, KPIdata } from '../utils/data'
import { useState, useEffect, lazy, Suspense } from 'react'
import { mgd } from '../utils/managementData'

const ManagementKPI = lazy(() => import('../components/managment/ManagmentKPI'))
const ManagementData = lazy(() =>
    import('../components/managment/ManagmentData')
)
const Popup = lazy(() => import('../components/managment/Popup'))

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
            <div className={style.filtre}>
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
                <select
                    id={style.bTelecharger}
                    style={{
                        position: 'relative',
                        width: '80px',
                        left: '35%',
                        backgroundColor: 'green',
                        border: 'none',
                    }}
                    className={style.buttonSecondFiltre}
                    onChange={handleSelect}
                    value=""
                >
                    <option value="" disabled>
                        Exporter
                    </option>
                    <option value="csv">Excel</option>
                    <option disabled value="pdf">
                        PDF
                    </option>
                </select>
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
