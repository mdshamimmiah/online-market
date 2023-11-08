import { useLoaderData } from "react-router-dom";
import RequestTable from "./RequestTable";


const Request = () => {

    const data = useLoaderData();
    console.log(data);

const filter = data?.filter(p => p.email.includes(''));

    return (
        <div>
            {
                filter?.map((info) => <RequestTable key={data._id} index={info}></RequestTable>)
            }
        </div>
    );
};

export default Request;