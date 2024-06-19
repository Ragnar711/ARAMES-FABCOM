import style from "../../styles/Machine.module.css";

const ResultatInstan = ({ data }) => {
    const getColor = (data, kpi) => {
        const ranges = {
            trs: { green: 65, yellow: 55 },
            tp: { green: 90, yellow: 80 },
            tq: { green: 90, yellow: 80 },
            td: { green: 75, yellow: 55 },
            tdech: { red: 2 },
        };
        const range = ranges[kpi];
        if (kpi === "tdech") {
            return data > range.red ? "#ff0800" : "#32cd32";
        }
        if (data >= range.green) {
            return "#32cd32";
        } else if (data >= range.yellow) {
            return "#A6910B";
        } else {
            return "#ff0800";
        }
    };

    return (
        <div className={style.resInst}>
            <div className={style.container}>
                <h3>Les résultats instantané:</h3>
                <div className={style.spanBlocKpi}>
                    <div className={style.divSPan}>
                        <span className={style.spanIndic}>
                            Taux de rendement synthétique:
                        </span>
                        <span
                            className={style.value}
                            style={{ color: getColor(data.kpi.trs, "trs") }}
                        >
                            {data.kpi.trs == 100
                                ? 100
                                : (data.kpi.trs ?? 0).toFixed(2)}
                            %
                        </span>
                    </div>
                    <div className={style.divSPan}>
                        <span className={style.spanIndic}>
                            Taux de performance:
                        </span>
                        <span
                            className={style.value}
                            style={{ color: getColor(data.kpi.tp, "tp") }}
                        >
                            {data.kpi.tp == 100
                                ? 100
                                : (data.kpi.tp ?? 0).toFixed(2)}
                            %
                        </span>
                    </div>
                    <div className={style.divSPan}>
                        <span className={style.spanIndic}>
                            Taux de qualité:
                        </span>
                        <span
                            className={style.value}
                            style={{ color: getColor(data.kpi.tq, "tq") }}
                        >
                            {data.kpi.tq == 100
                                ? 100
                                : (data.kpi.tq ?? 0).toFixed(2)}
                            %
                        </span>
                    </div>
                    <div className={style.divSPan}>
                        <span className={style.spanIndic}>
                            Taux de disponibilité:
                        </span>
                        <span
                            className={style.value}
                            style={{ color: getColor(data.kpi.td, "td") }}
                        >
                            {data.kpi.td == 100
                                ? 100
                                : (data.kpi.td ?? 0).toFixed(2)}
                            %
                        </span>
                    </div>
                    <div className={style.divSPan}>
                        <span className={style.spanIndic}>Tdéch: </span>
                        <span
                            className={style.value}
                            style={{ color: getColor(data.kpi.tdech, "tdech") }}
                        >
                            {data.kpi.tdech == 100
                                ? 100
                                : (data.kpi.tdech ?? 0).toFixed(2)}
                            %
                        </span>
                    </div>
                    <div className={style.divSPan}>
                        <span className={style.spanIndic}>
                            Ordre de fabrication en cours:
                        </span>
                        <span className={style.value}>{data.of.of ?? "-"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultatInstan;
