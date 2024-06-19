import { useState } from "react";
import style from "../../styles/Historique.module.css";

const Filters = () => {
    const [blockVisible, setBlockVisible] = useState(false);
    const toggleBlockVisibility = () => {
        setBlockVisible(!blockVisible);
    };

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <button className={style.buttonSecondFiltre}>J-1</button>
            <button className={style.buttonSecondFiltre}>W-1</button>
            <button className={style.buttonSecondFiltre}>M-1</button>
            <div style={{ position: "relative" }}>
                <button
                    id={style.bTelecharger}
                    className={style.buttonSecondFiltre}
                    onClick={toggleBlockVisibility}
                >
                    <img src="../../assets/telecharger.png" alt="telecharger" />
                </button>
                {blockVisible && (
                    <div
                        id={style.sousButton}
                        style={{
                            position: "absolute",
                            top: "-200%",
                            left: 0,
                            zIndex: 1,
                        }}
                    >
                        <span className={style.spanB}>
                            <img src="../../assets/excel.png" alt="excel" />
                            {}
                            Excel
                        </span>
                        <span className={style.spanB}>
                            <img src="../../assets/pdf.png" alt="pdf" />
                            {}
                            PDF
                        </span>
                    </div>
                )}
            </div>
            <input className={style.date} type="date" />
            <span style={{ fontSize: "14px", color: "black" }}>à</span>
            <input className={style.date} type="date" />
        </div>
    );
};

export default Filters;
