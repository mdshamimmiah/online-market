import { Link } from "react-router-dom";


const JobCart = ({cart}) => {
    const { _id,jobTitle, deadline, maximumPrice, description, minimumPrice, image, category} = cart;
    return (
     <div className="">
   <div className="card w-96  bg-white rounded-none border border-2 border-black">
       
        <div className="card-body h-[350px]">
         <p  className="text-xl font-bold text-black">Job Title : {jobTitle}</p>
        <h2 className="text-lg font-bold text-text-black"> Price Range : {minimumPrice} -{maximumPrice} </h2>
        <h3  className="text-sm font-bold text-text-black text-justify">Short Description : {description}</h3>
        <h2  className="text-xl font-bold underline"> Deadline: {deadline}</h2>
          <div className="card-actions justify-end">
          <Link to={`/jobDetails/${_id}`}>
          <button className="btn btn-outline">Bit Now</button>
          </Link>
          </div>
        </div>
      </div>

     </div>
    );
};

export default JobCart;