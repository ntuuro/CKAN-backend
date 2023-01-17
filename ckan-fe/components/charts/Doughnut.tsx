import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { chartCutout } from '../shared/charts/cutouts'
import DoughnutChartWrapper from '../shared/charts/DoughnutWrapper'

ChartJS.register(ArcElement, Tooltip, Legend)

export const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top' as const,
        },
        title: {
            display: false,
            text: 'Domestic Exports',
        },
    },
    cutout: chartCutout,
}

const OffersChart = ({ offersAnalytics }: any) => {

    const data = {
        labels: offersAnalytics?.labels,
        datasets: [
            {
                label: offersAnalytics.label,
                data: offersAnalytics?.datasets[0]?.data.reduce((accumulator:any, cur:any) => {
                    let date = cur.label;
                    let found = accumulator.find((elem: { label: any }) => elem.label === date)
                    if (found) found.data += parseFloat(cur.data);
                    else accumulator.push(cur);
                    return accumulator;
                }, []).map((item: any) => item.data),
                backgroundColor: offersAnalytics?.datasets[0]?.backgroundColor.map((item: any) => item),
                hoverOffset: 2
            },
        ],
    }

    return (
        <>
            <DoughnutChartWrapper>
                <Doughnut height="100%" options={options} data={data} />
            </DoughnutChartWrapper>
        </>
    )
}

export default OffersChart
