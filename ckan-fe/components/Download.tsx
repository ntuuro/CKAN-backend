import Header from "./shared/Header";
import {useImportsDataQuery} from "../services/endpoints/Dataset.endpoint";
import DownloadHeader from "./DownloadHeader";
import LineChart from "./LineChart";
type DownloadProps ={
    id:string
}
const Download = ({id}:DownloadProps):JSX.Element => {
    const {data:minisanteData, isLoading:loading} = useImportsDataQuery(id);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {
                loading ? <div>Loading...</div> : <DownloadHeader title={id} url={minisanteData!.result.resources[0].url}/>
            }
            <div className="flex  border-t-blue-900 border-4 border-r-0 border-b-0 border-l-0">
                <div className="bg-[#113356] flex-1 w-full min-w-fit ">

                </div>
                <div className="flex w-5/6 justify-center items-center pt-6">
                    {
                        loading ? <div>Loading...</div>:<LineChart  id={minisanteData!.result.resources[0].url} type={id} />
                    }

                </div>
            </div>
        </div>
    )
}

export default Download
