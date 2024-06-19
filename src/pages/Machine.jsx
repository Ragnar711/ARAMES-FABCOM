import { useState, useEffect, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

import style from "../styles/Machine.module.css";

import fetchData from "../utils/fetchData";

import Loader from "../components/Loader";

const Selector = lazy(() => import("../components/machine/Select"));
const ResultatInstan = lazy(() =>
    import("../components/machine/ResultatInstantane-phone")
);
const RésultatInstantané = lazy(() =>
    import("../components/machine/RésultatInstantané")
);
const TableMachine = lazy(() => import("../components/machine/TableMachine"));

const MACHINES = {
    machine6: "Ligne6",
    machine7: "Ligne7",
    machine9: "Ligne9",
    machine10: "Ligne10",
    machine11: "Ligne11",
};

function Machine() {
    const [data, setData] = useState({});
    const [validMachine, setValidMachine] = useState(0);

    const { machine } = useParams();

    let intervalId = null;

    const getData = async () => {
        const { error, status, data } = await fetchData(
            `/admin/new_machine/${machine}`,
            "GET"
        );
        if (status === 200 && data.success) {
            setData(data.data);
        } else {
            console.error(error);
        }
    };

    useEffect(() => {
        if (machine in MACHINES) {
            getData()
                .then(() => {
                    setValidMachine(1);
                })
                .catch(() => setValidMachine(-1));

            if (window.location.pathname.includes("/machine/")) {
                intervalId = setInterval(getData, 1000);
            }
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [machine]);

    return (
        <>
            {validMachine === 1 ? (
                <div
                    className={style.container}
                    style={{
                        position: "relative",
                    }}
                >
                    <Suspense fallback={<Loader />}>
                        <Selector />
                    </Suspense>
                    <div>
                        <Suspense fallback={<Loader />}>
                            <ResultatInstan data={data} />
                        </Suspense>
                        <Suspense fallback={<Loader />}>
                            <RésultatInstantané data={data} />
                        </Suspense>
                        <Suspense fallback={<Loader />}>
                            <TableMachine data={data} />
                        </Suspense>
                    </div>
                </div>
            ) : (
                <div>
                    <span>
                        {validMachine === 0
                            ? "Machine n'existe pas"
                            : "Problème de connexion"}
                    </span>
                </div>
            )}
        </>
    );
}

export default Machine;
