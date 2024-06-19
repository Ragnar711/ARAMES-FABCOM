import { PureComponent } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ReferenceLine,
} from "recharts";
import PropTypes from "prop-types";

export const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload?.length) {
        return (
            <div
                className="custom-tooltip"
                style={{
                    backgroundColor: "#ffffff",
                    padding: "5px",
                    border: "1px solid #cccccc",
                }}
            >
                <p style={{ fontSize: "10px" }}>{`Date: ${label}`}</p>
                {payload.map((item, index) => (
                    <p
                        key={index}
                        style={{ color: item.color, fontSize: "10px" }}
                    >{`${item.name}: ${item.value.toFixed(2)}`}</p>
                ))}
            </div>
        );
    }
    return null;
};

const CustomLegend = ({ payload, barsVisibility, onClick }) => {
    return (
        <ul
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "25%",
                padding: 0,
                marginBlock: 0,
                marginInline: "auto",
            }}
        >
            {payload.map((entry, index) => (
                <li
                    key={`item-${index}`}
                    onClick={() => onClick(entry)}
                    style={{
                        textDecoration: "none",
                        color: barsVisibility[entry.dataKey]
                            ? entry.color
                            : "#cccccc",
                        fontSize: "12.5px",
                    }}
                >
                    {entry.value.toUpperCase()}
                </li>
            ))}
        </ul>
    );
};

export default class Histo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            barsVisibility: {
                tp: true,
                tq: true,
                td: true,
                trs: true,
            },
        };
    }

    handleLegendClick = (e) => {
        const { dataKey } = e;
        this.setState((prevState) => ({
            barsVisibility: {
                ...prevState.barsVisibility,
                [dataKey]: !prevState.barsVisibility[dataKey],
            },
        }));
    };

    render() {
        const { barsVisibility } = this.state;

        const { displayData } = this.props;

        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={displayData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="heure" fontSize={10} />
                    <YAxis fontSize={10} tick={true} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        content={
                            <CustomLegend
                                barsVisibility={barsVisibility}
                                onClick={this.handleLegendClick}
                            />
                        }
                    />
                    <Line
                        dataKey="tq"
                        strokeWidth={1.5}
                        stroke={barsVisibility.tq ? "#9b59b6" : "transparent"}
                    />
                    <Line
                        dataKey="td"
                        strokeWidth={1.5}
                        stroke={barsVisibility.td ? "#2ecc71" : "transparent"}
                    />
                    <Line
                        dataKey="tp"
                        strokeWidth={1.5}
                        stroke={barsVisibility.tp ? "#e17055" : "transparent"}
                    />
                    <Line
                        dataKey="trs"
                        strokeWidth={1.5}
                        stroke={barsVisibility.trs ? "#b7dabc" : "transparent"}
                    />
                    <ReferenceLine y={95} stroke="red" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

CustomTooltip.propTypes = {
    active: PropTypes.bool.isRequired,
    payload: PropTypes.array,
    label: PropTypes.string,
};

CustomLegend.propTypes = {
    payload: PropTypes.array.isRequired,
    barsVisibility: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

Histo.propTypes = {
    displayData: PropTypes.array.isRequired,
};
