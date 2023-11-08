import { Link } from "react-router-dom";


const JobCart = ({cart}) => {
    const { _id,jobTitle, deadline, maximumPrice, description, minimumPrice, image, category} = cart;
    return (
     <div className="">
   <div className="card w-94 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...shadow-xl">
       
        <div className="card-body h-[501px]">
         <p  className="text-xl font-bold text-lime-400">Job Title : {jobTitle}</p>
        <h2 className="text-xl font-bold text-yellow-400"> Price Range : {maximumPrice} </h2>
        <h3  className="text-xl font-bold text-white">Short Description : {description}</h3>
        <h2  className="text-xl font-bold"> Deadline: {deadline}</h2>
          <div className="card-actions justify-end">
          <Link to={`/jobDetails/${_id}`}>
          <button className="btn btn-primary">Bit Now</button>
          </Link>
          </div>
        </div>
      </div>

     </div>
    );
};

export default JobCart;