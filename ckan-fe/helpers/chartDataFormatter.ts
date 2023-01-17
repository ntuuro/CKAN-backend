export const PieChartDataFormatter = (dataSets: any) => {
    return  {
        labels: [...new Set(dataSets?.map((item: any) => item.label))],
        datasets: [
            {
                data: dataSets.sort((a: any, b: any) => b - a),
                backgroundColor: dataSets.map((item: any) => item.backgroundColor),
                borderWidth: 4
            },
        ],
    }
}

export const LineChartDataFormatter = (dataSets: any) => {
    return  {
        labels: [...new Set(dataSets.map((item: any) => item.label))],
        datasets: [
            {
                label: [...new Set(dataSets.map((item: any) => item.category))],
                data: dataSets,
                backgroundColor: dataSets.map((item: any) => item.backgroundColor),
                borderWidth: 1
            },
        ],
    }
}

export const LineExpChartDataFormatter = (dataSets: any) => {
    return  {
        labels: [...new Set(dataSets.map((item: any) => item.label))],
        datasets: [
            {
                label: [...new Set(dataSets.map((item: any) => item.category))],
                data: dataSets,
                backgroundColor: dataSets.map((item: any) => item.backgroundColor),
                borderWidth: 1
            },
        ],
    }
}
