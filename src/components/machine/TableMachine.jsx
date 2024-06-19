import style from "../../styles/Machine.module.css";

const TableMachine = ({ data }) => {
    return (
        <div className={style.container}>
            <div className={style.tableResponsive}>
                <h3>Historique des résultats (Par poste) </h3>
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Heure</th>
                            <th>Poste</th>
                            <th>OF</th>
                            <th>QP (KG)</th>
                            <th>QNC (KG)</th>
                            <th>QD (KG)</th>
                            <th>TRS (%)</th>
                            <th>TQ (%)</th>
                            <th>TP (%)</th>
                            <th>TD (%)</th>
                            <th>TDECH (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.historique.map((row, index) => (
                            <tr key={index}>
                                <td>{row.heure}</td>
                                <td>{row.poste}</td>
                                <td>{row.of}</td>
                                <td>{(row["QP (KG)"] ?? 0).toFixed(0)}</td>
                                <td>{(row["QNC (KG)"] ?? 0).toFixed(0)}</td>
                                <td>{(row["QD (KG)"] ?? 0).toFixed(0)}</td>
                                <td>{(row["TRS (%)"] ?? 0).toFixed(2)}</td>
                                <td>{(row["TQ (%)"] ?? 0).toFixed(2)}</td>
                                <td>{(row["TP (%)"] ?? 0).toFixed(2)}</td>
                                <td>{(row["TD (%)"] ?? 0).toFixed(2)}</td>
                                <td>{(row["Tdech (%)"] ?? 0).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableMachine;
