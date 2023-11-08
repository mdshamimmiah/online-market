// import { useLoaderData } from "react-router-dom";
import PostFinishCard from "./postFinishCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import Footer from "../Footer";



const MyPostedJob = () => {

// const data = useLoaderData();
// console.log(data);
const {user} = useContext(AuthContext);
const [Card, setAddCard] = useState();
const url = `http://localhost:5000/online?email=${user.email}`;
useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddCard(data));
     
    }, []);
    


    return (
       
       <div>
         <div className="grid grid-cols-1 md:grid-col lg:grid-cols-3 gap-5 mt-16  ">
             
       {

Card && Card?.map(data => <PostFinishCard key={data._id} MyCard={data} Card={Card} setAddCard={setAddCard}></PostFinishCard> )
            }
       </div>
            
           <Footer></Footer>
        </div>
        
    );
};

export default MyPostedJob;


