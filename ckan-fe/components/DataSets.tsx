import {RiHeartPulseLine} from "react-icons/ri";
import {GiChart} from "react-icons/gi";
import {TbSchool} from "react-icons/tb";
import {BsTree} from "react-icons/bs";


const DataSets = ():JSX.Element => {
    return(
        <div className="flex  items-center justify-around py-2">
            <span className="text-[#8e8e8e] text-center mt-2 flex flex-col items-center">
                <GiChart className="text-4xl" />
                <span>Economy</span>
            </span>
            <span className="text-[#8e8e8e] text-center mt-2 flex flex-col items-center">
                <TbSchool className="text-4xl" />
                <span>Education</span>
            </span>
            <span className="text-[#8e8e8e] text-center mt-2 flex flex-col items-center">
                <BsTree className="text-4xl" />
                <span>Environment</span>
            </span>
            <span className="text-[#8e8e8e] text-center mt-2 flex flex-col items-center">
                <RiHeartPulseLine className="text-4xl" />
                <span>Health</span>
            </span>
        </div>
    )
}

export default DataSets
