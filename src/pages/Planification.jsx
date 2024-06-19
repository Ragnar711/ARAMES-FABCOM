import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "../styles/Planification.module.css";

function App() {
    const [divs, setDivs] = useState([{ id: 0, className: "my-div" }]);
    const [tableData, setTableData] = useState([]);
    const handleAddDiv = () => {
        const newId = divs.length;
        setDivs([...divs, { id: newId, className: "my-div" }]);
    };
    const handleRemoveDiv = () => {
        const newDivs = [...divs];
        newDivs.pop();
        setDivs(newDivs);
    };
    const handleAddTableData = (data) => {
        const newData = [...tableData];
        if (!newData.includes(data)) {
            newData.push(data);
            setTableData(newData);
        }
    };
    return (
        <div>
            <h3 id={style.title}>Planification de production</h3>
            {divs.map((div) => (
                <MyDiv
                    key={div.id}
                    className={div.className}
                    onAddTableData={handleAddTableData}
                />
            ))}
            <button onClick={handleAddDiv} className={style.plus}>
                +
            </button>
            {divs.length > 1 && (
                <button onClick={handleRemoveDiv} className={style.moins}>
                    -
                </button>
            )}
            <MyTable data={tableData} />
        </div>
    );
}

function MyDiv({ className }) {
    const [selectValue, setSelectValue] = useState("");
    const handleSelectChange = (event) => {
        setSelectValue(event.target.value);
    };
    return (
        <div className={className} id={style.divOF}>
            <select
                className={style.buttonfiltre}
                value={selectValue}
                onChange={handleSelectChange}
            >
                <option value="">Séction</option>
                <option value="option1">Extrusion</option>
                <option value="option2">Impression</option>
            </select>
            <select
                className={style.buttonfiltre}
                value={selectValue}
                onChange={handleSelectChange}
            >
                <option value="">Machine</option>
                <option value="macchi1">Macchi-1</option>
                <option value="macchi2">Macchi-2</option>
                <option value="varex">Varex</option>
                <option value="miraflex">Miraflex</option>
                <option value="complexage">Complexage</option>
                <option value="decoupe">Découpe</option>
            </select>
            <input className={style.date} type="date"></input>
            <input className={style.date} type="date"></input>
            <input className={style.date} placeholder="Numéro d'OF" />
            <select className={style.date}>
                <option>Urgent</option>
                <option>Non-Urgent</option>
            </select>
        </div>
    );
}

function MyTable({ data }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>N'OF</th>
                    <th>Status</th>
                    <th>Date de fabrication</th>
                    <th>Séction</th>
                    <th>Machine</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
MyTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
};
MyDiv.propTypes = {
    className: PropTypes.string.isRequired,
};
export default App;
