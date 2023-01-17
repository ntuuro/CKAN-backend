import {changeRoute} from "../../helpers/routeHandler.helper";

const Header =():JSX.Element=>{
    return(
        <div className="flex px-3 justify-between py-2 mx-auto w-2/3">
            <div className="hover:cursor-pointer" onClick={()=>changeRoute('/')}>
                Logo
            </div>
            <div className="flex flex ">
                <span className="mx-3 text-[#8e8e8e] uppercase hover:cursor-pointer">
                    Developers
                </span>
                <span className="mx-3 text-[#8e8e8e] uppercase hover:cursor-pointer">
                    Data Request
                </span>
            </div>
        </div>
    )
}

export default Header
