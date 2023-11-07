import { useLoaderData } from "react-router-dom";
import MyBitsCard from "./myPostedJob/MyBitsCard";


const MyBits = () => {

  const data = useLoaderData();
  console.log(data);

  return (

    <div>
      <MyBitsCard data={data}></MyBitsCard>
    </div>
  );
};

export default MyBits;