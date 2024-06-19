import ReactApexChart from "react-apexcharts";

import { getMonthAndDay } from "../../utils/dates";

import PropTypes from "prop-types";

const options = {
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
        fontFamily: "Satoshi, sans-serif",
        type: "bar",
        height: 335,
        stacked: true,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },

    responsive: [
        {
            breakpoint: 1536,
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 0,
                        columnWidth: "25%",
                    },
                },
            },
        },
    ],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 0,
            columnWidth: "25%",
            borderRadiusApplication: "end",
            borderRadiusWhenStacked: "last",
        },
    },
    dataLabels: {
        enabled: false,
    },

    xaxis: {
        categories: [],
    },
    legend: {
        position: "top",
        horizontalAlign: "left",
        fontFamily: "Satoshi",
        fontWeight: 500,
        fontSize: "14px",

        markers: {
            radius: 99,
        },
    },
    fill: {
        opacity: 1,
    },
};

const Barchart = ({ data }) => {
    const state = {
        series: [
            {
                name: "Déchets",
                data: [],
            },
            {
                name: "Non-conformes",
                data: [],
            },
        ],
    };

    const dates = [];

    for (const item of data.dechetBarChart) {
        dates.push(getMonthAndDay(item.day));
        state.series[0].data.push(item.quantite);
    }

    for (const item of data.NCBarChart) {
        state.series[1].data.push(item.quantite);
    }

    options.xaxis.categories = dates;

    return (
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
            <div>
                <div id="chartTwo" className="-ml-5 -mb-9">
                    <ReactApexChart
                        options={options}
                        series={state.series}
                        type="bar"
                        height={350}
                    />
                </div>
            </div>
        </div>
    );
};

Barchart.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Barchart;
