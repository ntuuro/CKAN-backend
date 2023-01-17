import OffersChart from "./charts/Doughnut";
import React, {useEffect, useState} from "react";
import {useAnnualCarsQuery, useImportsDataQuery} from "../services/endpoints/Dataset.endpoint";
import {CSVParser} from "../helpers/DataSetParser";
import {annualMotorVehicleDataFormatter, exportDataFormatter} from "../helpers/csvDataFormatter";
import {PieChartDataFormatter} from "../helpers/chartDataFormatter";
import {changeRoute} from "../helpers/routeHandler.helper";
import {routes} from "../config/router.config";

const ChartsData = ():JSX.Element=>{
    const {data:minisanteData, isLoading:loading} = useImportsDataQuery('domestic-exports');
    const {data: minremaData, isLoading: carsLoading} = useAnnualCarsQuery('annual-cars');
    const [exportData, setExportData] = useState<any>([])
    const [carsData, setCarsData] = useState<any>([])

    useEffect(()=>{
        if(!loading && !carsLoading){
            CSVParser(minisanteData!.result.resources[0].url).then((res:any)=>setExportData(res.data))
            CSVParser(minremaData!.result.resources[0].url).then((res:any)=>setCarsData(res.data))
        }
    },[loading, minisanteData, minremaData,carsLoading])



    const dataSets =  exportDataFormatter(exportData);
    const carsDataSets = annualMotorVehicleDataFormatter(carsData)

    const pieCarsData = PieChartDataFormatter(carsDataSets)

    const pieFilteredData =PieChartDataFormatter(dataSets)


    return(
        <div className="bg-[#f8f8f8] min-h-1/4 flex-1 py-2">
            <div className="flex flex-col w-4/5 mx-auto justify-center">
                <span className="text-[#8e8e8e] text-2xl font-light">
                    Rwanda's at a Glance
                </span>
                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white p-3">
                        <h1 className="text-center text-xl pb-3 hover:text-sky-700 hover:cursor-pointer" onClick={()=>changeRoute({ pathname: routes.Download.url, query: { id: "domestic-exports" } })}>Domestic Exports By Area</h1>

                        {
                            pieFilteredData && <div className="h-80">
                                <OffersChart offersAnalytics={pieFilteredData}  />
                            </div>
                        }
                    </div>

                    <div className="bg-white p-3">
                        <h1 className="text-center text-xl pb-3 hover:text-sky-700 hover:cursor-pointer " onClick={()=>changeRoute({ pathname: routes.Download.url, query: { id: "annual-cars" } })}>Annual Motor Vehicle Population</h1>
                        {
                            pieCarsData && <div className="h-80">
                                <OffersChart offersAnalytics={pieCarsData}  />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartsData
