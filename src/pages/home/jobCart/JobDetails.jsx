import { useLoaderData } from "react-router-dom";
import Footer from "../../Footer";
import { AuthContext } from "../../../Firebase/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";


const JobDetails = () => {

const details = useLoaderData();
const { _id,jobTitle, deadline, maximumPrice, description, minimumPrice, image, category} = details;


console.log(details);

const { user } = useContext(AuthContext);


// handle section

const handleAddProduct = event => {

    event.preventDefault();




    const form = event.target;

    const price = form.price.value;
    const deadline = form.deadline.value;
    const email = form.email.value;
    const email2 = form.email2.value;
    const newAddJob = { price, deadline, email, email2, jobTitle,status: 'pending' }
    console.log(newAddJob);


    // sent data server
    fetch('http://localhost:5000/bit', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newAddJob)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Job Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })

}

// Determine whether the current user is the owner of the job
const isOwner = user.email === details.email;

    return (
      <div className="mt-8">
        <div className="mb-9">
        <div className="card w-96 bg-blue-400 shadow-xl mx-auto">
        <div className="card-body">
          <h2> Name : {jobTitle}</h2>
          <h2>Deadline : {deadline}</h2>
          <h2>Price Range : {minimumPrice}$ -{maximumPrice}$</h2>
          <h2>Description : {description}</h2>
          <div className="card-actions justify-end">
            
          </div>
        </div>
      </div>
        </div>


{/* form section */}

        <div>
        <div className="bg-blue-400 p-24">
            <h2 className="text-3xl font-extrabold text-center mb-10">Bid Form Section</h2>
            <form onSubmit={handleAddProduct}>
                {/* first */}
                <div className="md:flex mb-8">

                <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="deadline" placeholder="Deadline" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* second */}
                <div className="md:flex mb-8">

                <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">

                            <input readOnly value={user?.email} type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>

                <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Buyer Email</span>
                        </label>
                        <label className="input-group">

                            <input readOnly value={user?.email} type="email" name="email2" placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>


                  
                </div>
                {/* third */}
             

                {/* four */}

                <input type="submit" value="Bit On The Project" className="btn btn-block bg-black text-white"disabled={isOwner} />
            </form>
          
        </div>
        <div className=' w-full'>
                <Footer></Footer>
            </div>
        </div>
        
      </div>
      
    );
};

export default JobDetails;