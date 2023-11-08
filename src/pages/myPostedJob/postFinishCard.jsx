import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const PostFinishCard = ({MyCard, Card, setAddCard}) => {

    const { _id,jobTitle, deadline, maximumPrice, description, minimumPrice, email, category } = MyCard;


    console.log(MyCard);
   
    const handleDelete = _id => {
        console.log(_id);

        // delete work
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             
               fetch(`http://localhost:5000/online/${_id}`, {
                method: 'DELETE'
               })
               .then(res => res.json())
               .then(data => {
                 console.log(data);
            
               if (data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                 )
                  const remaining = Card.filter(MyCardDataLoad => MyCardDataLoad._id !==_id);
                  setAddCard(remaining);
               }
              })
            }
          })
        

        
    }
    return (
      
        

        <div>
        <div className="card w-94 bg-purple-600 shadow-xl mx-auto">
            
             <div className="card-body">
              <p>Job Title : {jobTitle}</p>
             <h2> Price Range : {maximumPrice} </h2>
             <h3>Short Description : {description}</h3>
               <div className=" flex justify-between">
              
               <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>

               <Link to={`/updateDetails/${_id}`}>
               <button className="btn btn-primary ">Update</button>
               </Link>
              
            
               </div>
             </div>
         </div>
        
         </div>
       
    );
};

export default PostFinishCard;