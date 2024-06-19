// maps machine to ligne
export const mapMachineToLine = (machineName) => {
    const mapping = {
        Machine6: "Ligne 6",
        Machine7: "Ligne 7",
        Machine9: "Ligne 9",
        Machine10: "Ligne 10",
        Machine11: "Ligne 11",
    };
    // return the mapped name if it exists, else return the original name
    return mapping[machineName] || machineName;
};
