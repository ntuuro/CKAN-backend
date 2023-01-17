
import {useEffect, useState} from "react";
import {CSVParser} from "../helpers/DataSetParser";
import {
    annualMotorVehicleDataLineFormatter, exportDataLineFormatter,
} from "../helpers/csvDataFormatter";
import { LineExpChartDataFormatter} from "../helpers/chartDataFormatter";
import LineChartComponent from "./charts/LineChart";


type DownloadProps ={
    id:any
    type:string
}
const LineChart = ({id,type}:DownloadProps):JSX.Element => {



    const [carsData, setCarsData] = useState<any>([])
    useEffect(()=>{

            CSVParser(id).then((res:any)=>setCarsData(res.data))


    },[id])

    const dataSets =  annualMotorVehicleDataLineFormatter(carsData);
    const carsDataSets = LineExpChartDataFormatter(dataSets)
    const pieCarsData = exportDataLineFormatter(carsData)

    const pieFilteredData =LineExpChartDataFormatter(pieCarsData)






    return (
        <div className="flex h-full w-full  items-center">
            {
                id && type==='domestic-exports'? <LineChartComponent offersAnalytics={pieFilteredData} /> : null
            }
            {
                id && type==='annual-cars'? <LineChartComponent offersAnalytics={carsDataSets} /> : null
            }

        </div>
    )
}
export default LineChart
