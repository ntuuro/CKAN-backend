import {Form, Input} from "antd";

const SearchComponent = () => {
    return (
        <div className="searchSection h-1/3 flex items-center justify-center w-full">
            <Form className="searchForm">
                <Input.Search placeholder="Search Rwanda's Public Data" className="w-3/5">

                </Input.Search>
            </Form>
        </div>
    )
}

export default SearchComponent
