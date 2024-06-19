import React, { useState, useEffect } from "react";
import { RiDownloadFill } from "react-icons/ri";

import style from "../styles/Historique.module.css";

import { exportToCSV } from "../utils/exportFunctions";
import { mapMachineToLine } from "../utils/helpers";
import fetchData from "../utils/fetchData";
import Capitalize from "../utils/strings";

const processOptions = [{ label: "ExtrusionPE", value: "extrusionPE" }];
const machineOptions = {
    extrusionPE: [
        { label: "Ligne 6", value: "machine6" },
        { label: "Ligne 7", value: "machine7" },
        { label: "Ligne 9", value: "machine9" },
        { label: "Ligne 10", value: "machine10" },
        { label: "Ligne 11", value: "machine11" },
    ],
};

const Historique = () => {
    const [data, setData] = useState([]);

    const [process, setProcess] = useState("");
    const [machines, setMachines] = useState([]);
    const [machine, setMachine] = useState("");

    const handleProcessChange = (event) => {
        const selectedProcess = event.target.value;
        setProcess(selectedProcess);
        setMachines(machineOptions[selectedProcess]);
    };
    const handleMachineChange = (event) => {
        const selectedMachine = event.target.value;
        setMachine(selectedMachine);
        changeFilter("machine", selectedMachine);
    };

    const [filters, setFilters] = useState({
        machine: "",
        filter: "",
        from: new Date().toISOString().split("T")[0],
        to: new Date().toISOString().split("T")[0],
    });
    const [showTable, setShowTable] = useState(false);

    const changeFilter = (filterName, value) => {
        if (filterName !== null && value !== null) {
            setFilters({ ...filters, [filterName]: value });
        }
    };

    const getData = async () => {
        setShowTable(false);
        const { error, status, data } = await fetchData(
            `/admin/new_historykpi/${filters.machine}/${filters.filter}/${filters.from}/${filters.to}`,
            "GET"
        );
        if (status === 200 && data.success) {
            setData(data.data);
        } else {
            console.error(error);
        }
        setShowTable(true);
    };
    useEffect(() => {
        getData();
    }, [filters]);

    return (
        <>
            <div
                className={style.filtreHistory}
                style={{ position: "relative" }}
            >
                <div className={style.firstFiltre}>
                    <div>
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
                            value={machine}
                            onChange={handleMachineChange}
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
                        <button
                            className={style.buttonfiltre}
                            onClick={() => changeFilter("filter", "of")}
                        >
                            OF
                        </button>
                        <button
                            className={style.buttonfiltre}
                            onClick={() => changeFilter("filter", "poste")}
                        >
                            Poste
                        </button>
                    </div>
                    <h3>Filtrage de Dates</h3>
                    <div>
                        <button
                            className={style.buttonSecondFiltre}
                            onClick={() => {
                                let date = new Date();
                                const to = date.toISOString().split("T")[0];
                                date.setDate(date.getDate());
                                const from = date.toISOString().split("T")[0];
                                setFilters({ ...filters, from, to });
                            }}
                        >
                            J-1
                        </button>
                        <button
                            className={style.buttonSecondFiltre}
                            onClick={() => {
                                let date = new Date();
                                const to = date.toISOString().split("T")[0];
                                date.setDate(date.getDate() - 6);
                                const from = date.toISOString().split("T")[0];
                                setFilters({ ...filters, from, to });
                            }}
                        >
                            W-1
                        </button>
                        <button
                            className={style.buttonSecondFiltre}
                            onClick={() => {
                                let date = new Date();
                                const to = date.toISOString().split("T")[0];
                                date.setMonth(date.getMonth() - 1);
                                const from = date.toISOString().split("T")[0];
                                setFilters({ ...filters, from, to });
                            }}
                        >
                            M-1
                        </button>

                        <input
                            className={style.date}
                            type="date"
                            value={filters.from}
                            onChange={(event) =>
                                changeFilter("from", event.target.value)
                            }
                        />
                        <span style={{ fontSize: "14px", color: "black" }}>
                            à
                        </span>
                        <input
                            className={style.date}
                            type="date"
                            value={filters.to}
                            onChange={(event) =>
                                changeFilter("to", event.target.value)
                            }
                        />
                        <h3>Exporter les données</h3>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <button
                                className={style.exportData}
                                onClick={() => exportToCSV(data, "Historique")}
                            >
                                <RiDownloadFill fontSize={20} />
                                Excel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.divTable}>
                {showTable && (
                    <>
                        <h3 className={style.tableTitle}>
                            {mapMachineToLine(Capitalize(filters.machine))} | {}
                            {Capitalize(filters.filter)} | {filters.from} | {}
                            {filters.to}
                        </h3>
                        <table className={style.tableResponsive}>
                            <thead>
                                {data.length > 0 && (
                                    <tr>
                                        {Object.keys(data[0]).map((column) => {
                                            if (column === "history") {
                                                return (
                                                    <React.Fragment
                                                        key={column}
                                                    >
                                                        <th key={`${column}-1`}>
                                                            {"Date début"}
                                                        </th>
                                                        <th key={`${column}-2`}>
                                                            {"Date fin"}
                                                        </th>
                                                    </React.Fragment>
                                                );
                                            } else {
                                                return (
                                                    <th key={column}>
                                                        {Capitalize(column)}
                                                    </th>
                                                );
                                            }
                                        })}
                                    </tr>
                                )}
                            </thead>
                            <tbody>
                                {data.map((item, index) => {
                                    let history;
                                    return (
                                        <tr key={index}>
                                            {Object.keys(item).map(
                                                (column, columnIndex) => {
                                                    if (column === "history") {
                                                        try {
                                                            history =
                                                                JSON.parse(
                                                                    item[column]
                                                                );
                                                        } catch (err) {
                                                            history = [];
                                                        }
                                                        return (
                                                            <React.Fragment
                                                                key={`${index}-${columnIndex}`}
                                                            >
                                                                <td
                                                                    key={`${index}-${columnIndex}-1`}
                                                                >
                                                                    {typeof history[0]
                                                                        .debut ===
                                                                    "undefined"
                                                                        ? "NaN"
                                                                        : history[0]
                                                                              .debut}
                                                                </td>
                                                                <td
                                                                    key={`${index}-${columnIndex}-2`}
                                                                >
                                                                    {typeof history[
                                                                        history.length -
                                                                            1
                                                                    ].fin ===
                                                                    "undefined"
                                                                        ? "NaN"
                                                                        : history[
                                                                              history.length -
                                                                                  1
                                                                          ].fin}
                                                                </td>
                                                            </React.Fragment>
                                                        );
                                                    } else {
                                                        return (
                                                            <td
                                                                key={`${index}-${columnIndex}`}
                                                            >
                                                                {typeof item[
                                                                    column
                                                                ] === "number"
                                                                    ? item[
                                                                          column
                                                                      ].toFixed(
                                                                          0
                                                                      )
                                                                    : item[
                                                                          column
                                                                      ]}
                                                            </td>
                                                        );
                                                    }
                                                }
                                            )}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </>
    );
};

export default Historique;
