import { PureComponent } from "react";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { formatDuration, timeStringToSeconds } from "../../utils/dates";

export default class ParetoArret extends PureComponent {
    processData = (data) => {
        // Sort data in descending order
        const orderedData = [...data].sort(
            (a, b) =>
                timeStringToSeconds(b.duree) - timeStringToSeconds(a.duree)
        );

        // Calculate cumulative percentage
        let totalDuree = orderedData.reduce(
            (total, item) => total + timeStringToSeconds(item.duree),
            0
        );
        let cumulativeDuree = 0;

        orderedData.forEach((item) => {
            cumulativeDuree += timeStringToSeconds(item.duree);
            item.cumulativeDuree = (
                (cumulativeDuree / totalDuree) *
                100
            ).toFixed(2);
        });

        orderedData.forEach((item) => {
            item.duree = timeStringToSeconds(item.duree);
        });

        return orderedData;
    };

    render() {
        const { data } = this.props;
        const processedData = this.processData(data);

        return (
            <ResponsiveContainer width="100%" height="90%">
                <ComposedChart
                    width={500}
                    height={400}
                    data={processedData}
                    margin={{
                        top: 50,
                        right: 50,
                        bottom: 20,
                        left: 50,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis
                        dataKey="cause"
                        label={{
                            value: "Cause",
                            position: "insideBottomRight",
                            offset: -10,
                            fontSize: 10,
                        }}
                        fontSize={10}
                    />
                    <YAxis
                        yAxisId="left"
                        dataKey="duree"
                        label={{
                            value: "Durée",
                            angle: -90,
                            position: "top",
                            fontSize: 10,
                            offset: 30,
                        }}
                        fontSize={10}
                        tickFormatter={(item) => formatDuration(item)}
                    />
                    <YAxis yAxisId="right" orientation="right" fontSize={10} />
                    <Tooltip contentStyle={{ fontSize: 10 }} />
                    <Bar
                        yAxisId="left"
                        dataKey="duree"
                        barSize={40}
                        fill="#413ea0"
                    />
                    <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="cumulativeDuree"
                        stroke="#ff7300"
                    />
                </ComposedChart>
            </ResponsiveContainer>
        );
    }
}
