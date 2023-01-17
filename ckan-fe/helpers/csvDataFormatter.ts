import {AnnualCars, Exports} from "../shared/types/DataSet.types";

export const exportDataFormatter = (data: Exports[]) => {
    return data.map((item: any) => {
        return {
            label: item.area,
            data: parseFloat(item.domestic_exports),
            backgroundColor: item.area === 'Africa' ? 'green' : item.area === 'Asia' ? '#8A1538' : item.area === 'Europe'
                ? 'blue' : item.area === 'America' ? '#87868a' : item.area === 'Oceania' ? '#c43238' :item.area === 'European Union' ? '#0c113f' : 'black',
        }

    })
}

export const exportDataLineFormatter = (data: Exports[]) => {
    return data.map((item: any) => {
        return {
            label: item.year,
            category: item.area,
            data: parseFloat(item.domestic_exports),
            backgroundColor: item.area === 'Africa' ? 'green' : item.area === 'Asia' ? 'red' : item.area === 'Europe'
                ? 'blue' : item.area === 'America' ? '#8A1538' : item.area === 'Oceania' ? '#87868a'  : 'black',
        }

    })
}

export const annualMotorVehicleDataFormatter = (data: AnnualCars[]) => {
    return data.map((item: AnnualCars) => {
        return {
            label: item.category,
            data: parseFloat(item.number),
            backgroundColor: item.category === 'Cars and Station-wagons' ? '#8A1538' : item.category === 'Taxis' ? 'blue' : item.category === 'Motorcycles and Scooters'
                ? '#4d081d' : item.category === 'Goods and Other Vehicles' ? 'brown' : item.category === 'Buses' ? 'orange'  : item.category === 'Tax Exempted Vehicles' ? 'yellow' : 'black',
        }
    })

}
export const annualMotorVehicleDataLineFormatter = (data: AnnualCars[]) => {
    return data.map((item: any) => {
        return {
            label: item.year,
            data: parseFloat(item.number),
            category: item.category,
            backgroundColor: item.category === 'Cars and Station-wagons' ? 'purple' : item.category === 'Taxis' ? 'red' : item.category === 'Motorcycles and Scooters'
                ? 'blue' : item.category === 'Goods and Other Vehicles' ? 'brown' : item.category === 'Buses' ? 'orange'  : item.category === 'Tax Exempted Vehicles' ? 'teal' : 'black',
        }
    })
}
