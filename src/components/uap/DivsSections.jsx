import { useNavigate } from "react-router-dom";

import style from "../../styles/Section.module.css";
import "../../styles/section.css";

import { getColor } from "../../utils/ChangeKPIColors";

import network from "../../assets/network.png";
import User from "../../assets/usericon.png";
import marche from "../../assets/Image1.png";
import news from "../../assets/news.png";
import iconProcess from "../../assets/process.webp";
import iconKpi from "../../assets/iconKpi.webp";
import ofIcon from "../../assets/ofIcon.webp";

import PropTypes from "prop-types";
import { getPoste } from "../../utils/getPoste";
import { formatDuration } from "../../utils/dates";

const DivsSections = ({ data, machineData }) => {
    const navigate = useNavigate();

    let per =
        (data.kpi.QP /
            (data.of.QuantiteObjectif === "NaN"
                ? data.kpi.QP
                : data.of.QuantiteObjectif)) *
        100;

    return (
        <div style={{ position: "relative" }}>
            <div
                style={{
                    display: data.network ? "none" : "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    position: "absolute",
                    zIndex: 1000,
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <img
                    style={{
                        height: "50px",
                        width: "50px",
                        marginRight: "8px",
                    }}
                    src={network}
                    alt="network"
                />
                <p style={{ fontSize: "0.5rem" }}>
                    Problème de réseau {machineData.machine} (Absence de
                    connection)
                </p>
            </div>
            <div
                className={style.section}
                style={{ filter: data.network ? "none" : "blur(16px)" }}
            >
                <div className={style.titresection}>
                    <div className={style.titleImage}>
                        <h1
                            onClick={() =>
                                data.network
                                    ? navigate(`/machine/${machineData.mach}`)
                                    : false
                            }
                            style={{
                                backgroundColor: `#595959`,
                                fontSize: "20px",
                            }}
                        >
                            Extrusion- {machineData.machine}
                        </h1>
                        <img
                            src={marche}
                            alt="marche"
                            className={style.etatIcon}
                        />
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <img
                        className={style.imageMachine}
                        src={machineData.image}
                        alt="machine"
                    />
                    <div className={style.user}>
                        <img className={style.iconUser} src={User} alt="user" />
                        <span>{data.operator}</span>
                        <span>{getPoste()}</span>
                    </div>
                    <div className={style.of}>
                        <span className={style.TM}> | {data.kpi.TO}</span>
                        <span className={style.TA}> | {data.kpi.TA}</span>
                    </div>
                </div>
                <div className={style.blocKpi}>
                    <div className={style.titreImageOf}>
                        <img src={ofIcon} alt="icon" className={style.iconOf} />
                        <h2>OF | Suivi de l'OF encours</h2>
                    </div>
                    <div className={style.spans}>
                        <div className={style.blocQuantite}>
                            <div
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "space-between",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100%",
                                        justifyContent: "space-between",
                                        lineHeight: "1rem",
                                    }}
                                >
                                    <span className={style.titreBloc}>
                                        Quantié réalisée
                                    </span>
                                    <span className={style.titreBloc}>
                                        Quantié objectif
                                    </span>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100%",
                                        justifyContent: "space-between",
                                        lineHeight: "1rem",
                                    }}
                                >
                                    <div>
                                        <span className={style.titreValue}>
                                            <sub
                                                style={{
                                                    fontSize: "10px",
                                                    color: "black",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                Kg
                                            </sub>
                                            | {data.kpi.QP.toFixed(2)}
                                        </span>
                                    </div>

                                    <span className={style.titreValue}>
                                        <sub
                                            style={{
                                                fontSize: "10px",
                                                color: "black",
                                            }}
                                        >
                                            Kg
                                        </sub>
                                        | {data.of.QuantiteObjectif}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={style.blocOf}>
                            <div style={{ marginTop: "9px" }}>
                                <span
                                    className={style.titreBloc}
                                    style={{ fontSize: "12px" }}
                                >
                                    Réference OF
                                </span>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <span className={style.titreValue}>
                                    <sub
                                        style={{
                                            fontSize: "10px",
                                            color: "black",
                                        }}
                                    >
                                        N°OF
                                    </sub>
                                    | {data.of.of}
                                </span>
                                <span className={style.titreValue}>
                                    <sub
                                        style={{
                                            fontSize: "10px",
                                            color: "black",
                                        }}
                                    >
                                        Article
                                    </sub>
                                    | N/A
                                </span>
                            </div>
                            <div className={style.divOF}>
                                <div
                                    className={style.subDivOf}
                                    style={{
                                        width: per >= 100 ? "100%" : `${per}%`,
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        className={style.percentageLine}
                                        style={{ left: "100%" }}
                                    ></div>
                                    <div className={style.percentageText}>
                                        {Math.round(per) > 15
                                            ? Math.round(per) >= 100
                                                ? "100%"
                                                : `${Math.round(per)}%`
                                            : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.blocKpi} id={style.kpi}>
                    <div className={style.titreImageOf}>
                        <img src={iconKpi} alt="" className={style.iconOf} />
                        <h2>KPI | Performance de la section</h2>
                    </div>
                    <div className={style.spans}>
                        <div className={style.blocQuantite}>
                            <div
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "space-between",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        lineHeight: "1rem",
                                    }}
                                >
                                    <span className={style.titreBloc}>
                                        Taux de Rendement Synthétique
                                    </span>
                                    <span className={style.titreBloc}>
                                        Taux de performance
                                    </span>
                                    <span className={style.titreBloc}>
                                        Taux de disponibilité
                                    </span>
                                    <span className={style.titreBloc}>
                                        Taux de qualité
                                    </span>
                                    <span className={style.titreBloc}>
                                        Taux de Déchet
                                    </span>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        lineHeight: "1rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-around",
                                            width: "108%",
                                        }}
                                    >
                                        <div>
                                            <span className={style.titreValue}>
                                                <sub
                                                    style={{
                                                        fontSize: "10px",
                                                        color: "black",
                                                    }}
                                                >
                                                    TRS
                                                </sub>
                                                |
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                className={style.titreValue}
                                                style={{
                                                    color: getColor(
                                                        data?.kpi?.TRS?.toFixed(
                                                            0
                                                        ) ?? 0,
                                                        "trs"
                                                    ),
                                                }}
                                            >
                                                {data.kpi.TRS.toFixed(0)} %
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-around",
                                            width: "108%",
                                        }}
                                    >
                                        <div>
                                            <span className={style.titreValue}>
                                                <sub
                                                    style={{
                                                        fontSize: "10px",
                                                        color: "black",
                                                    }}
                                                >
                                                    TP
                                                </sub>
                                                |
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                className={style.titreValue}
                                                style={{
                                                    color: getColor(
                                                        data?.kpi?.TP?.toFixed(
                                                            0
                                                        ) ?? 0,
                                                        "tp"
                                                    ),
                                                }}
                                            >
                                                {data.kpi.TP.toFixed(0)} %
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-around",
                                            width: "108%",
                                        }}
                                    >
                                        <div>
                                            <span className={style.titreValue}>
                                                <sub
                                                    style={{
                                                        fontSize: "10px",
                                                        color: "black",
                                                    }}
                                                >
                                                    TD
                                                </sub>
                                                |
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                className={style.titreValue}
                                                style={{
                                                    color: getColor(
                                                        data?.kpi?.TD?.toFixed(
                                                            0
                                                        ) ?? 0,
                                                        "td"
                                                    ),
                                                }}
                                            >
                                                {data.kpi.TD.toFixed(0)} %
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-around",
                                            width: "108%",
                                        }}
                                    >
                                        <div>
                                            <span className={style.titreValue}>
                                                <sub
                                                    style={{
                                                        fontSize: "10px",
                                                        color: "black",
                                                    }}
                                                >
                                                    TQ
                                                </sub>
                                                |
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                className={style.titreValue}
                                                style={{
                                                    color: getColor(
                                                        data?.kpi?.TQ?.toFixed(
                                                            0
                                                        ) ?? 0,
                                                        "tq"
                                                    ),
                                                }}
                                            >
                                                {data.kpi.TQ.toFixed(0)} %
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-around",
                                            width: "108%",
                                        }}
                                    >
                                        <div>
                                            <span className={style.titreValue}>
                                                <sub
                                                    style={{
                                                        fontSize: "10px",
                                                        color: "black",
                                                    }}
                                                >
                                                    Tdé|
                                                </sub>
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                className={style.titreValue}
                                                style={{
                                                    color: getColor(
                                                        data?.kpi?.TQ?.toFixed(
                                                            0
                                                        ) ?? 0,
                                                        "tdech"
                                                    ),
                                                }}
                                            >
                                                {data.kpi.Tdech.toFixed(0)} %
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.blocKpi} id={style.params}>
                    <div className={style.titreImageOf}>
                        <img
                            src={iconProcess}
                            alt=""
                            className={style.iconOf}
                        />
                        <h2>Prosess | Paramètre prosess</h2>
                    </div>
                    <div className={style.spans}>
                        <div className={style.blocQuantite}>
                            <div
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "space-between",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        lineHeight: "1rem",
                                    }}
                                >
                                    <span className={style.titreBloc}>
                                        Débit Réel
                                    </span>
                                    <span className={style.titreBloc}>
                                        Vitesse de tirage
                                    </span>
                                    <span className={style.titreBloc}>
                                        Vitesse d'extrusion
                                    </span>
                                    <span className={style.titreBloc}>
                                        Poids au métre
                                    </span>
                                    <span className={style.titreBloc}>
                                        Débit théorique
                                    </span>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        lineHeight: "1rem",
                                    }}
                                >
                                    <span className={style.titreValueKPI}>
                                        <sub
                                            style={{
                                                fontSize: "10px",
                                                color: "black",
                                                fontWeight: "400",
                                            }}
                                        >
                                            Kg/h
                                        </sub>
                                        <span style={{ fontWeight: "400" }}>
                                            |
                                        </span>{" "}
                                        {(data.realTimeData.debit ?? 0).toFixed(
                                            0
                                        )}
                                    </span>
                                    <span className={style.titreValueKPI}>
                                        <sub
                                            style={{
                                                fontSize: "10px",
                                                color: "black",
                                                fontWeight: "400",
                                            }}
                                        >
                                            m/min
                                        </sub>
                                        <span style={{ fontWeight: "400" }}>
                                            |
                                        </span>{" "}
                                        {data.realTimeData.vitesseT.toFixed(0)}
                                    </span>
                                    <span className={style.titreValueKPI}>
                                        <sub
                                            style={{
                                                fontSize: "10px",
                                                color: "black",
                                                fontWeight: "400",
                                            }}
                                        >
                                            RPM
                                        </sub>
                                        <span style={{ fontWeight: "400" }}>
                                            |
                                        </span>{" "}
                                        {data.realTimeData.vitesseE.toFixed(0)}
                                    </span>
                                    <span className={style.titreValueKPI}>
                                        <sub
                                            style={{
                                                fontSize: "10px",
                                                color: "black",
                                                fontWeight: "400",
                                            }}
                                        >
                                            Kg/m
                                        </sub>
                                        <span style={{ fontWeight: "400" }}>
                                            |
                                        </span>{" "}
                                        {data.realTimeData.poids.toFixed(0)}
                                    </span>
                                    <span className={style.titreValueKPI}>
                                        <sub
                                            style={{
                                                fontSize: "10px",
                                                color: "black",
                                                fontWeight: "400",
                                            }}
                                        >
                                            Kg/h
                                        </sub>
                                        <span style={{ fontWeight: "400" }}>
                                            |
                                        </span>{" "}
                                        {data.of.DebitTheorique}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.blocKpi}>
                    <div className={style.titreImageOf}>
                        <img src={news} alt="" className={style.iconOf} />

                        <h2>News | Flash évènements </h2>
                    </div>
                    <div className={style.spans}>
                        <span className={style.titreBloc}>Dernier Déchet</span>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <span className={style.titreValueKPI}>
                                <sub
                                    style={{
                                        fontSize: "10px",
                                        color: "black",
                                        fontWeight: "400",
                                    }}
                                >
                                    Kg/h
                                </sub>
                                <span style={{ fontWeight: "400" }}>|</span> NAN
                            </span>
                            <span className={style.titreValueKPI}>
                                <sub
                                    style={{
                                        fontSize: "10px",
                                        color: "black",
                                        fontWeight: "400",
                                    }}
                                >
                                    Cause
                                </sub>{" "}
                                | Nett
                            </span>
                        </div>
                        <span className={style.titreBloc}>Dernier NC</span>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <span className={style.titreValueKPI}>
                                <sub
                                    style={{
                                        fontSize: "10px",
                                        color: "black",
                                        fontWeight: "400",
                                    }}
                                >
                                    Kg/h
                                </sub>
                                <span style={{ fontWeight: "400" }}>|</span> NAN
                            </span>
                            <span className={style.titreValueKPI}>
                                <sub
                                    style={{
                                        fontSize: "10px",
                                        color: "black",
                                        fontWeight: "400",
                                    }}
                                >
                                    Cause
                                </sub>{" "}
                                | Nett
                            </span>
                        </div>
                        <span className={style.titreBloc}>Dernier Arret</span>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <span className={style.titreValueKPI}>
                                <span style={{ fontWeight: "400" }}>|</span>{" "}
                                {formatDuration(data.lastArret.Duree)}
                            </span>
                            <span className={style.titreValueKPI}>
                                <sub
                                    style={{
                                        fontSize: "10px",
                                        color: "black",
                                        fontWeight: "400",
                                    }}
                                >
                                    Cause
                                </sub>{" "}
                                | {data.lastArret.Motif}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DivsSections;

DivsSections.propTypes = {
    data: PropTypes.object.isRequired,
    machineData: PropTypes.object.isRequired,
};
