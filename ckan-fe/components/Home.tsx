import Header from "./shared/Header";
import SearchComponent from "./Search";
import DataSets from "./DataSets";
import ChartsData from "./Charts";



const HomeComponent =():JSX.Element=>{


    return(
        <div className="flex flex-col h-full">
            <Header />
            <SearchComponent />
            <DataSets />
            <ChartsData />


        </div>
    )
}
export default HomeComponent;
