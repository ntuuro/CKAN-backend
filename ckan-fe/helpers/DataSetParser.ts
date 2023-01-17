import Papa from "papaparse";

export const CSVParser = async(url: string) => {
    return await fetch(url)
        .then(response => response.text())
        .then(v => Papa.parse(v,{header: true, skipEmptyLines: true,}))
        .catch(err => console.log(err));

}
