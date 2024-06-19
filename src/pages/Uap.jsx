import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DivsSections from "../components/uap/DivsSections";
import fetchData from "../utils/fetchData";
import ligne from "../assets/ligne.png";

const machineData = {
    extrusionPE: {
        machine6: {
            image: ligne,
            value: 95,
            machine: "Ligne-6",
            mach: "machine6",
        },
        machine7: {
            image: ligne,
            value: 95,
            machine: "Ligne-7",
            mach: "machine7",
        },
        machine9: {
            image: ligne,
            value: 95,
            machine: "Ligne-9",
            mach: "machine9",
        },
        machine10: {
            image: ligne,
            value: 95,
            machine: "Ligne-10",
            mach: "machine10",
        },
        machine11: {
            image: ligne,
            value: 95,
            machine: "Ligne-11",
            mach: "machine11",
        },
    },
};

// Get the current date
const yesterday = new Date();

// Get yesterday's date
const currentDate = new Date(yesterday);
currentDate.setDate(currentDate.getDate() + 1);

const Uap = () => {
    const [data, setData] = useState([]);
    const [validSection, setValidSection] = useState(false);
    const { section } = useParams();

    const getData = async () => {
        const { error, status, data } = await fetchData(
            `/admin/new_section/${section}`,
            "GET"
        );
        if (status === 200 && data.success) {
            setData(data.data);
        } else {
            console.error(error);
        }
        if (window.location.pathname.includes("/uap/")) {
            setTimeout(() => {
                getData();
            }, 1000);
        }
    };
    useEffect(() => {
        if (Object.keys(machineData).includes(section)) {
            setValidSection(true);
            getData();
        }
    }, []);

    return (
        <>
            {validSection ? (
                Object.keys(data).map((key, index) => {
                    return (
                        <DivsSections
                            key={index}
                            data={data[key]}
                            machineData={machineData[section][key]}
                        />
                    );
                })
            ) : (
                <div>
                    <span>Section n'existe pas</span>
                </div>
            )}
        </>
    );
};

export default Uap;
