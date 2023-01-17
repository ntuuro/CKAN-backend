import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale,PointElement, LineController, LineElement} from 'chart.js'
import { Line } from 'react-chartjs-2'
import DoughnutChartWrapper from '../shared/charts/DoughnutWrapper'

ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,PointElement,LineController,LineElement)

export const options = {
    responsive:true,

}

const LineChartComponent = ({ offersAnalytics }: any) => {
    console.log(offersAnalytics)
    console.log(".........=============.....")
    const groupedData = Object.entries(offersAnalytics.datasets[0].data.reduce(function (r:any, a:any) {
        r[a.backgroundColor] = r[a.backgroundColor] || [];
        r[a.backgroundColor].push(a);
        return r;
    }, Object.create(null)))

    const data = {
        labels: [...new Set(offersAnalytics?.labels)],
        datasets: groupedData.map((item:any)=>{
            console.log(item)
            return {
                label: item[1][0].category,
                data: item[1].map((item:any)=>item.data),
                backgroundColor: item[0],
                borderColor: item[0],
                borderWidth: 1,
                fill: false
            }
        })
    }
    console.log(offersAnalytics)
    console.log("..............")

    return (
        <>
            <DoughnutChartWrapper>

                <Line
                    data={data}
                    options={options}/>
            </DoughnutChartWrapper>
        </>
    )
}

export default LineChartComponent

