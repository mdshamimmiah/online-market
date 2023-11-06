import { useLoaderData } from "react-router-dom";
import MyBitsCard from "./myPostedJob/MyBitsCard";


const MyBits = () => {

  const data = useLoaderData();
  console.log(data);

  return (

    <div>
      {
        data?.map((item) => <MyBitsCard key={data._id} item={item}></MyBitsCard> )
      }
    </div>
  );
};

export default MyBits;