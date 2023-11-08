import { useLoaderData } from "react-router-dom";
import RequestTable from "./RequestTable";
import Footer from "../Footer";


const Request = () => {

    const data = useLoaderData();
    console.log(data);

const filter = data?.filter(p => p.email.includes(''));

    return (
      <div>
          <div>
            {
                filter?.map((info) => <RequestTable key={data._id} index={info}></RequestTable>)
            }
        </div>

        <Footer></Footer>
      </div>
    );
};

export default Request;