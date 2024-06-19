import { useState, lazy, Suspense } from "react";

import style from "../../styles/Managment.module.css";

const Histo = lazy(() => import("./Histogramme"));
const LineC = lazy(() => import("./LineChart"));

import Loader from "../Loader";
import pdf from "../../assets/pdf.png";

import { downloadDivContentAsPDF } from "../../utils/exportFunctions";
import Capitalize from "../../utils/strings";

const ManagmentKPI = ({ data }) => {
    const [histoHeight, setHistoHeight] = useState(300);
    const [lineHeight, setLineHeight] = useState(300);
    const [histoVisible, setHistoVisible] = useState(true);
    const [lineVisible, setLineVisible] = useState(true);
    const [tableVisible, setTableVisible] = useState(true);
    const toggleHistoVisibility = () => {
        setHistoVisible(!histoVisible);
        setHistoHeight(histoVisible ? 0 : 300);
    };
    const toggleLineVisibility = () => {
        setLineVisible(!lineVisible);
        setLineHeight(lineVisible ? 0 : 300);
    };
    const toggleTableVisibility = () => {
        setTableVisible(!tableVisible);
    };
    data = data === null ? { chart: [], table: [] } : data;

    if (!data.table || data.table.length === 0) {
        return null;
    }

    return (
        <div className={style.Cont}>
            <h2 className={style.ManagmentDataH2}>
                Les indicateurs de performance
            </h2>
            <div className={style.kpiCont}>
                <div className={style.ManagmentKPICharts}>
                    <div
                        className={`${style.chart} export-item`}
                        id="histo"
                        style={{
                            height: histoHeight + "px",
                        }}
                    >
                        <h3 className={style.chartHeader}>
                            Histogramme KPI
                            <span
                                className={style.spanB}
                                onClick={() => downloadDivContentAsPDF("histo")}
                            >
                                <img src={pdf} alt="pdf" />
                            </span>
                            <span
                                className={style.toggle}
                                onClick={toggleHistoVisibility}
                            >
                                {histoVisible ? "-" : "+"}
                            </span>
                        </h3>
                        {histoVisible && data !== null && (
                            <Suspense fallback={<Loader />}>
                                <Histo displayData={data.chart} />
                            </Suspense>
                        )}
                    </div>
                    <div
                        className={`${style.chart} export-item`}
                        id="lineChart"
                        style={{
                            height: lineHeight + "px",
                        }}
                    >
                        <h3 className={style.chartHeader}>
                            Graphique KPI
                            <span
                                className={style.spanB}
                                onClick={() =>
                                    downloadDivContentAsPDF("lineChart")
                                }
                            >
                                <img src={pdf} alt="pdf" />
                            </span>
                            <span
                                className={style.toggle}
                                onClick={toggleLineVisibility}
                            >
                                {lineVisible ? "-" : "+"}
                            </span>
                        </h3>
                        {lineVisible && (
                            <Suspense fallback={<Loader />}>
                                <LineC displayData={data.chart} />
                            </Suspense>
                        )}
                    </div>
                </div>
                <div className={style.tableKPI}>
                    <h3 className={style.tableHeader2}>
                        Tableau KPI
                        <span
                            className={style.toggle}
                            onClick={toggleTableVisibility}
                        >
                            {tableVisible ? "-" : "+"}
                        </span>
                    </h3>
                    {tableVisible && (
                        <table
                            style={{ width: "100%" }}
                            border="1"
                            cellPadding="5"
                            cellSpacing="0"
                        >
                            <thead>
                                <tr>
                                    {Object.keys(
                                        data.table.length ? data.table[0] : {}
                                    ).map((heading, index) => (
                                        <th key={index}>
                                            {Capitalize(heading)}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.table.map((dataItem, index) => (
                                    <tr key={index}>
                                        {Object.values(dataItem).map(
                                            (value, idx) => (
                                                <td key={idx}>
                                                    {typeof value === "number"
                                                        ? value.toFixed(0)
                                                        : value}
                                                </td>
                                            )
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManagmentKPI;
