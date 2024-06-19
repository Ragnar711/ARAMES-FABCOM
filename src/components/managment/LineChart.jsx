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
} from "recharts";
import { CustomTooltip } from "./Histogramme";

export default class LineC extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            linesVisibility: {
                TP: true,
                TQ: true,
                TD: true,
                TRS: true,
            },
        };
    }
    handleLegendClick = (e) => {
        const { dataKey } = e;
        this.setState((prevState) => ({
            linesVisibility: {
                ...prevState.linesVisibility,
                [dataKey]: !prevState.linesVisibility[dataKey],
            },
        }));
    };
    render() {
        const { linesVisibility } = this.state;
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
                    <XAxis dataKey="Date" fontSize={10} />
                    <YAxis fontSize={10} tick={true} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        wrapperStyle={{ fontSize: "10px" }}
                        onClick={this.handleLegendClick}
                    />
                    <Line
                        type="monotone"
                        dataKey="TP (%)"
                        stroke="#a8dadc"
                        activeDot={{ r: 8 }}
                        hide={linesVisibility["TP (%)"]}
                    />
                    <Line
                        type="monotone"
                        dataKey="TQ (%)"
                        stroke="#1d3557"
                        hide={linesVisibility["TQ (%)"]}
                    />
                    <Line
                        type="monotone"
                        dataKey="TD (%)"
                        stroke="#457b9d"
                        hide={linesVisibility["TD (%)"]}
                    />
                    <Line
                        type="monotone"
                        dataKey="TRS (%)"
                        stroke="#b7dabc"
                        hide={linesVisibility["TRS (%)"]}
                    />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
