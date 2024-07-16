import style from '../../styles/Management.module.css'
import { CSVLink } from 'react-csv'
import { lazy, Suspense } from 'react'

const Checkbox = lazy(() => import('./Checkbox'))

const Popup = ({
    handleClose,
    toggleTable,
    filteredData,
    kpiHeaders,
    arretHeaders,
    manDataHeaders,
    selectedTables,
    prepareDataForCSV,
}) => {
    return (
        <>
            <div className={style.custom_backdrop} onClick={handleClose} />
            <div className={style.custom_modal}>
                <div className={style.modalHeader}>
                    <h5 className={style.customModalTitle}>
                        Sélectionnez les données à exporter
                    </h5>
                </div>
                <div className={style.modalBody}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Checkbox
                            id="kpiTable"
                            label="Tableau KPI"
                            onChange={() =>
                                toggleTable(
                                    'kpiTable',
                                    filteredData.KPIdata,
                                    kpiHeaders
                                )
                            }
                        />
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Checkbox
                            id="manDataTable1"
                            label="Tableau d'Arrêts"
                            onChange={() =>
                                toggleTable(
                                    'manDataTable1',
                                    filteredData.Arrets,
                                    arretHeaders
                                )
                            }
                        />
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Checkbox
                            id="manDataTable2"
                            label="Tableau de déchets"
                            onChange={() =>
                                toggleTable(
                                    'manDataTable2',
                                    filteredData.Dechet,
                                    manDataHeaders
                                )
                            }
                        />
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Checkbox
                            id="manDataTable3"
                            label="Tableau de non conforme"
                            onChange={() =>
                                toggleTable(
                                    'manDataTable3',
                                    filteredData.NC,
                                    manDataHeaders
                                )
                            }
                        />
                    </Suspense>
                </div>
                <div className={style.modalFooter}>
                    <CSVLink
                        data={prepareDataForCSV(selectedTables)}
                        filename="exported_tables.csv"
                    >
                        <button
                            className={style.downloadBtn}
                            onClick={handleClose}
                            style={{
                                border: 'none',
                                padding: '2%',
                                color: 'white',
                                backgroundColor: 'green',
                                marginLeft: '40%',
                                marginBlock: '2%',
                            }}
                        >
                            Exporter CSV
                        </button>
                    </CSVLink>
                </div>
            </div>
        </>
    )
}

export default Popup
