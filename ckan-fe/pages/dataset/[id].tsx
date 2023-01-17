import {useRouter} from "next/router";
import Download from "../../components/Download";

const DataSetDownload = ():JSX.Element => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <Download id={id}/>
        </div>
    );
}
export default DataSetDownload
