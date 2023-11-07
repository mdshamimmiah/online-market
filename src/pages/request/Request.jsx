import { useLoaderData } from "react-router-dom";
import RequestTable from "./RequestTable";


const Request = () => {

    const data = useLoaderData();
    console.log(data);


    return (
        <div>
            {
                data?.map((info) => <RequestTable key={data._id} index={info}></RequestTable>)
            }
        </div>
    );
};

export default Request;