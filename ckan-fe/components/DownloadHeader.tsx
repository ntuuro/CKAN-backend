import {Button} from "antd";


type DownloadProps={
    title: string,
    url: string
}
const DownloadHeader = ({title, url}:DownloadProps):JSX.Element => {

    const downloadFile = () => {
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `${title}.csv`)
        document.body.appendChild(link)
        link.click()
    }
    return (
        <div className="download-header bg-teal-50 w-full h-24 flex justify-evenly items-center">
            <h1>{title.replace(/-/g," ").toUpperCase()}</h1>
            <Button type="primary" onClick={downloadFile}>Download</Button>
        </div>
    );
}

export default DownloadHeader;
