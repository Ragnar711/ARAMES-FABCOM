import FilterSelect from "./FilterSelect";
import style from "../../styles/Historique.module.css";

const FilterSection = ({
    process,
    handleProcessChange,
    selectedMachine,
    setSelectedMachine,
    processOptions,
    machines,
}) => {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <FilterSelect
                className={style.buttonfiltre}
                value={process}
                onChange={handleProcessChange}
                options={processOptions}
                defaultLabel="Section"
            />
            <FilterSelect
                className={style.buttonfiltre}
                value={selectedMachine}
                onChange={(event) => setSelectedMachine(event.target.value)}
                options={machines}
                defaultLabel="Machine"
            />
        </div>
    );
};

export default FilterSection;
