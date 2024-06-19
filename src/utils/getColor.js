const COLORS = {
    green: "#00FF00",
    yellow: "#FFA500",
    red: "#FF0000",
};

export const getColor = (data, kpi) => {
    const ranges = {
        trs: { green: 65, yellow: 55 },
        tp: { green: 90, yellow: 80 },
        tq: { green: 90, yellow: 80 },
        td: { green: 75, yellow: 55 },
        tdech: { red: 2 },
    };
    const range = ranges[kpi];
    if (kpi === "tdech") {
        return data > range.red ? COLORS.red : COLORS.green;
    }
    if (data >= range.green) {
        return COLORS.green;
    } else if (data >= range.yellow) {
        return COLORS.yellow;
    } else {
        return COLORS.red;
    }
};
